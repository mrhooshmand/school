// import dependencies
import { useEffect, useState } from 'react'
// import hooks
import useToken from '../hooks/useToken'
// import api functions
import { deleteAreaApi, getAreasApi } from '../api/areaApi'
// import interfaces
import { Area_ } from '../interfaces/areaInterface'
// import components
import AreaModal from '../components/modals/AreaModal'
import AreaRow from '../components/table/rows/AreaRow'

function AreasListPage() {

    const [showModal, setShowModal] = useState<boolean>(false)
    const [page, setPage] = useState<number>(0)
    const [areas, setAreas] = useState<Area_[]>()
    const [area, setArea] = useState<Area_>()
  
    const [searchValue, setSearchValue] = useState<string>()
  
    const { token } = useToken()
  
    useEffect(() => {
      getAreasApi(token)
        .then(res => setAreas(res.data.data))
        .catch(err => console.log(err))
    }, [])
  
    const splitFive = []
      const sliceIntoChunks = (data: Area_[]) => {
          for (let i = 0;i < data.length;i += 5) {
              const chunk = data.slice(i, i + 5)
              splitFive.push(chunk)
          }
      }
    areas && sliceIntoChunks(areas)
  
    // search
    useEffect(() => {
      // setUsers(users?.filter( user => user.first_name.includes(`${searchValue}`) || user.last_name.includes(`${searchValue}`)))
    },[searchValue])

    const changeModalStatus = () => setShowModal(!showModal)

    const getArea = (area: Area_, action: string) => {
        action === 'edit' ?
            setArea(area)
            : deleteAreaApi(area.id, token)
    }

    return (
        <>
            { areas &&
                <>
                    <div className=" bg-white h-4/5 rounded-lg shadow-xl p-10 mx-5 mt-10 flex flex-col justify-between">
                        <div>

                            <span className="flex justify-between mb-10">
                            <button onClick={() =>  changeModalStatus()} className=" text-white rounded px-10 py-3 focus:outline-none shadow-xl shadow-sky-200 bg-[#009DF8]">ناحیه جدید</button>
                            <span className=" w-1/3 flex items-center">
                                <input onChange={e => setSearchValue(e.target.value)} className=" bg-slate-100 rounded-l-lg p-3 text-right w-full focus:outline-none" type="text" placeholder="جستجو" />
                                <i className=" fi fi-rr-search text-xl text-stone-400 bg-slate-100 rounded-r-lg p-3.5 flex"></i>
                            </span>
                            </span>
                            <table className="w-full" >
                            <thead className=" border-b ">
                                <th className=" w-1/3 text-right text-slate-400">عملیات</th>
                                <th className=" w-2/3 pb-4 pt-10">
                                <p className="pr-5 flex items-center justify-end">
                                    ناحیه 
                                    <span className="material-symbols-outlined text-xl text-stone-600 ml-2">arrow_upward</span>
                                </p>
                                </th>
                            </thead>
                            <tbody>
                                { areas.map( (area: Area_) => <AreaRow key={area.id} area={area} changeModalStatus={changeModalStatus} getArea={getArea} />) }
                            </tbody>
                            </table>
                        </div>
                        <span className='flex justify-start items-center mt-10'>
                            <span onClick={() => page+1 !== splitFive.length && setPage(page+1)} className=' cursor-pointer rounded-lg px-2 material-symbols-outlined border text-xl rotate-90'>expand_more</span>
                            <p className='bg-[#009DF8] px-3 py-1.5 flex justify-center items-center text-white rounded-md mx-1'>{page}</p>
                            <span onClick={() => page !== 0 && setPage(page-1)} className='cursor-pointer rounded-lg px-2 material-symbols-outlined border text-xl -rotate-90'>expand_more</span>
                        </span>
                    </div>
                    { showModal && <AreaModal area={area} changeModalStatus={changeModalStatus} />}
                </>
            }
        </>
    )
}

export default AreasListPage