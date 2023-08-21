// import dependencies
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import hooks
import useToken from '../hooks/useToken'
// import api functions
import { deleteAttributeApi , getAttributesApi } from '../api/attributeApi'
// import interfaces
import { Attribute_ } from '../interfaces/attributeInterface'
// import components
import AttributeModal from '../components/modals/AttributeModal'
import AttributeRow from '../components/table/rows/AttributeRow'

function AttributesListPage() {

    const [showModal, setShowModal] = useState<string>('none')
    const [page, setPage] = useState<number>(0)
    const [attributes, setAttributes] = useState<Attribute_[]>()
    const [attribute, setAttribute] = useState<Attribute_>()

    const [searchValue, setSearchValue] = useState<string>()

    const { token } = useToken()

    useEffect(() => {
        getAttributesApi(token)
            .then(res => setAttributes(res.data.data))
            .catch(err => console.log(err))
    }, [])

    const splitFive = []
    const sliceIntoChunks = (data: Attribute_[]) => {
        for (let i = 0; i < data.length; i += 5) {
            const chunk = data.slice(i, i + 5)
            splitFive.push(chunk)
        }
    }
    attributes && sliceIntoChunks(attributes)

    // search
    useEffect(() => {
        // setUsers(users?.filter( user => user.first_name.includes(`${searchValue}`) || user.last_name.includes(`${searchValue}`)))
    }, [searchValue])

    const closeModal = () => {
        setShowModal('none')
    }

    const changeModalStatus = () => setShowModal(!showModal)

    const getAttribute = (attribute: Attribute_, action: string) => {
        action === 'edit' ?
            setAttribute(attribute)
            : deleteAreaApi(attribute.id, token)
    }

    return (
        <>
            {attributes &&
                <>
                    <div className=" bg-white rounded-lg h-4/5 flex flex-col justify-between shadow-xl p-10 mx-5 mt-10">
                        <div>

                            <span className="flex justify-between mb-10">
                                <button onClick={() => setShowModal('add')} className=" text-white rounded px-10 py-3 focus:outline-none shadow-xl shadow-sky-200 bg-[#009DF8]">ویژگی جدید</button>
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
                                            ویژگی
                                            <span className="material-symbols-outlined text-xl text-stone-600 ml-2">arrow_upward</span>
                                        </p>
                                    </th>
                                </thead>
                                <tbody>
                                    {attributes.map((attribute: Attribute_) => <AttributeRow key={attribute.id} attribute={attribute} changeModalStatus={changeModalStatus} getAttribute={getAttribute} />)}
                                </tbody>
                            </table>
                        </div>
                        <span className='flex justify-start items-center mt-10'>
                            <span onClick={() => page + 1 !== splitFive.length && setPage(page + 1)} className=' cursor-pointer rounded-lg px-2 material-symbols-outlined border text-xl rotate-90'>expand_more</span>
                            <p className='bg-[#009DF8] px-3 py-1.5 flex justify-center items-center text-white rounded-md mx-1'>{page}</p>
                            <span onClick={() => page !== 0 && setPage(page - 1)} className='cursor-pointer rounded-lg px-2 material-symbols-outlined border text-xl -rotate-90'>expand_more</span>
                        </span>
                    </div>
                    {showModal === 'add' && <AttributeModal method={showModal} closeModal={closeModal} />}
                    {showModal === 'edit' && <AttributeModal method={showModal} closeModal={closeModal} />}
                </>
            }
        </>
    )
}

export default AttributesListPage