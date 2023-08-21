// import dependencies
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import assets

function SchoolRow({ school, changeModalStatus, getSchool }) {

    const [showButton, setShowButton] = useState<boolean>(false)

    return (
        <tr key={school.id} className='border-b'>
            <td className="w-1/4 py-3 ">
                <span className='flex justify-end relative'>
                    <p onClick={() => setShowButton(!showButton)} className='cursor-pointer text-stone-600 bg-slate-100 py-2 rounded-lg w-24 items-center flex justify-center'>
                        <span className="material-symbols-outlined text-xl mr-2  ">expand_more</span>
                        عملیات
                    </p>
                    { showButton &&
                        <div className='bg-white absolute shadow-xl rounded-xl w-32 top-14 p-3 z-10'>
                            <p onClick={() => (changeModalStatus(), getSchool(school, 'edit'))} className=' cursor-pointer text-green-500 border-b w-full text-center pb-3'>ویرایش</p>
                            <p onClick={() => getSchool(school, 'delete')} className='cursor-pointer text-red-500 w-full text-center pt-3'>حذف</p>
                        </div>
                    }
                </span>
            </td>
            <td className="w-1/4 py-4 text-right">{school.area.name}</td>
            <td className="w-1/4 py-4 text-right">{school.manager.first_name} {school.manager.last_name}</td>
            <td className="w-1/4 py-4">
                <Link to={`/user/${school.id}`}>
                    <p className='mr-10 text-right'>{school.name}</p>
                </Link>
            </td>
        </tr>
    )
}

export default SchoolRow