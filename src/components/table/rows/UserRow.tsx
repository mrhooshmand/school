// import dependencies
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import assets
import userImg from '../../../assets/user.png'

function UserRow({ user, changeModalStatus, getUser }) {

    const [showButton, setShowButton] = useState<boolean>(false)

    return (
        <tr key={user.id} className='border-b'>
            <td className="w-1/4">
            <span className='flex justify-end relative'>
                <p onClick={() => setShowButton(!showButton)} className='cursor-pointer text-stone-600 bg-slate-100 py-2 rounded-lg w-24 items-center flex justify-center'>
                    <span className="material-symbols-outlined text-xl mr-2  ">expand_more</span>
                    عملیات
                </p>
                { showButton &&
                    <div className='bg-white absolute shadow-xl rounded-xl w-32 top-14 p-3 z-10'>
                        <p onClick={() => (changeModalStatus(), getUser(user, 'edit'))} className=' cursor-pointer text-green-500 border-b w-full text-center pb-3'>ویرایش</p>
                        <p onClick={() => getUser(user, 'delete')} className='cursor-pointer text-red-500 w-full text-center pt-3'>حذف</p>
                    </div>
                }
            </span>
            </td>
            <td className="w-1/4 text-right">{user.mobile_number}</td>
            <td className="w-1/4 text-right">{user.national_code}</td>
            <td className="w-1/4 py-4">
            <Link to={`/user/${user.id}`}>
                <div className="flex items-center justify-end">
                <span className='text-right mr-3'>
                    <p>{user.last_name} {user.first_name} </p>
                    <p className=' text-stone-400 '>{user.gender === 'female' ? 'دختر' : 'پسر'}</p>
                </span>
                <img className="h-12 w-12 rounded-xl" src={userImg} alt="user image" />
                </div>
            </Link>
            </td>
        </tr>
    )
}

export default UserRow