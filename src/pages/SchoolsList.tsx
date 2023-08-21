// import dependencies
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
// import hooks
import useToken from '../hooks/useToken'
// import api functions
import { deleteSchoolApi, getSchoolsApi } from '../api/schoolApi'
// import interfaces
import { School_ } from '../interfaces/schoolInterface'
// import components
import SchoolModal from '../components/modals/SchoolModal'
import SchoolRow from '../components/table/rows/SchoolRow'

function SchoolsListPage() {

    const [showModal, setShowModal] = useState<boolean>(false)
    const [page, setPage] = useState<number>(0)
    const [schools, setSchools] = useState<School_[]>()
    const [school, setSchool] = useState<School_>()
  
    const [searchValue, setSearchValue] = useState<string>()
  
    const { token } = useToken()
  
    useEffect(() => {
        getSchoolsApi(token)
        .then(res => setSchools(res.data.data))
        .catch(err => console.log(err))
    }, [])
    
    const splitFive = []
      const sliceIntoChunks = (data: School_[]) => {
          for (let i = 0;i < data.length;i += 5) {
              const chunk = data.slice(i, i + 5)
              splitFive.push(chunk)
          }
      }
    schools && sliceIntoChunks(schools)
  
    // search
    useEffect(() => {
      // setUsers(users?.filter( user => user.first_name.includes(`${searchValue}`) || user.last_name.includes(`${searchValue}`)))
    },[searchValue])

    const changeModalStatus = () => setShowModal(!showModal)

    const getSchool = (school: School_, action: string) => {
        action === 'edit' ?
            setSchool(school)
            : deleteSchoolApi(school.id, token)
    }

    return (
        <>
            { schools &&
                <>
                    <div className=" bg-white rounded-lg shadow-xl h-4/5 p-10 mx-5 flex flex-col justify-between mt-10">
                        <div>
                            <span className="flex justify-between mb-10">
                            <button onClick={() =>  changeModalStatus()} className=" text-white rounded px-10 py-3 focus:outline-none shadow-xl shadow-sky-200 bg-[#009DF8]">مدرسه جدید</button>
                            <span className=" w-1/3 flex items-center">
                                <input onChange={e => setSearchValue(e.target.value)} className=" bg-slate-100 rounded-l-lg p-3 text-right w-full focus:outline-none" type="text" placeholder="جستجو" />
                                <i className=" fi fi-rr-search text-xl text-stone-400 bg-slate-100 rounded-r-lg p-3.5 flex"></i>
                            </span>
                            </span>
                            <table className="w-full" >
                            <thead className=" border-b ">
                                <th className=" w-1/4 text-right text-slate-400">عملیات</th>
                                <th className=" w-1/4 text-right text-slate-400">ناحیه</th>
                                <th className=" w-1/4 text-right text-slate-400">نام مدیر</th>
                                <th className=" w-1/4 pb-4 pt-10">
                                <p className="pr-5 flex items-center justify-end">
                                    نام مدرسه 
                                    <span className="material-symbols-outlined text-xl text-stone-600 ml-2">arrow_upward</span>
                                </p>
                                </th>
                            </thead>
                            <tbody>
                                { schools.map( (school: School_) => <SchoolRow changeModalStatus={changeModalStatus} school={school} getSchool={getSchool} />) }
                            </tbody>
                            </table>
                        </div>
                        <span className='flex justify-start items-center mt-10'>
                            <span onClick={() => page+1 !== splitFive.length && setPage(page+1)} className=' cursor-pointer rounded-lg px-2 material-symbols-outlined border text-xl rotate-90'>expand_more</span>
                            <p className='bg-[#009DF8] px-3 py-1.5 flex justify-center items-center text-white rounded-md mx-1'>{page}</p>
                            <span onClick={() => page !== 0 && setPage(page-1)} className='cursor-pointer rounded-lg px-2 material-symbols-outlined border text-xl -rotate-90'>expand_more</span>
                        </span>
                    </div>
                    { showModal && <SchoolModal school={[]} changeModalStatus={changeModalStatus} />}
                </>
            }
        </>
    )
}

export default SchoolsListPage