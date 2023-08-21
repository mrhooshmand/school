// import dependencies
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// import assets
import userImg from '../assets/user.png'
// import axios
import { getUserApi } from '../api/userApi'
// import hooks
import useToken from '../hooks/useToken'
// import interfaces
import { User_ } from '../interfaces/userInterface'

function UserProfilePage() {

  const [user, setUser] = useState<User_>()

  const userId: number = parseInt(useLocation().pathname.split('/')[2])

  const { token } = useToken()

  useEffect(() => {
    getUserApi(userId, token)
      .then(res => setUser(res.data.data[0]))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      { user &&
        <>
          <div className=" bg-white rounded-lg flex flex-col items-end shadow-xl px-8 py-5 mx-5 mt-10">
            <span className='flex mr-4 justify-end items-start'>
              <span className=' text-right mr-3'>
                <p>{user.first_name} {user.last_name}</p>
                <span className='flex items-center mt-2.5 text-stone-400'>
                  <p>{user.mobile_number}</p>
                  <i className=' fi fi-rr-phone-call flex text-lg mx-2.5'></i>
                  <p>{user.type === 'admin' ? 'ادمین' : 'کاربر'}</p>
                  <i className=' text-lg ml-2.5 fi flex fi-rr-user'></i>
                </span>
              </span>
              <img className=' h-28 w-28 rounded-lg' src={userImg} alt="user image" />
            </span>
            <button className='border-b border-b-[#009DF8] text-[#009DF8] py-3.5 px-5 mt-3'>اطلاعات فردی</button>
          </div>
          <div className=" bg-white rounded-lg my-6 hadow-xl px-10 py-7 mx-5">
            <span className="flex border-b pb-5 justify-between items-center mb-10">
              <button className=" text-white rounded px-10 py-3 focus:outline-none shadow-xl shadow-sky-200 bg-[#009DF8]">ویرایش اطلاعات کاربر</button>
              <p className=' text-lg'>جزعیات اطلاعات فردی و کاربری</p>
            </span>
            <div className='flex flex-col items-end '>
              <span className='flex items-center w-full justify-end my-3'>
                <p>{user.first_name} {user.last_name}</p>
                <p className='w-1/5 text-right'>: نام و نام خانوادگی</p>
              </span>
              <span className='flex items-center my-3 w-full justify-end'>
                <p>{user.father_name}</p>
                <p className='w-1/5 text-right'>: نام پدر</p>
              </span>
              <span className='flex items-center my-3 w-full justify-end'>
                <p>{user.birth_date.split('-').join('/')}</p>
                <p className='w-1/5 text-right'>: تاریخ تولد</p>
              </span>
              <span className='flex items-center my-3 w-full justify-end'>
                <p>{user.national_code}</p>
                <p className='w-1/5 text-right'>: کد ملی</p>
              </span>
              <span className='flex items-center my-3 w-full justify-end'>
                <p>{user.gender === 'female' ? 'دختر' : 'پسر'}</p>
                <p className='w-1/5 text-right'>: جنسیت</p>
              </span>
              <span className='flex items-center my-3 w-full justify-end'>
                <p>{user.mobile_number}</p>
                <p className='w-1/5 text-right'>: نلفن همراه</p>
              </span>
              <span className='flex items-center my-3 w-full justify-end'>
                <p>{user.type === 'admin' ? 'ادمین' : 'کاربر'}</p>
                <p className='w-1/5 text-right'>: نوع کاربر</p>
              </span>
            </div>
          </div>
          <div className=" bg-white mx-5 rounded-lg my-6 hadow-xl p-10">
            <span className="border-b pb-5 text-right mb-10">
              <p className=' text-lg'>جزعیات تغییرات در حساب کاربری</p>
            </span>
            <div className='flex flex-col items-end '>
              <span className='flex items-center w-full justify-end my-3'>
                <p className='w-1/5 text-right'>: ایجاد کاربر</p>
              </span>
              <span className='flex items-center w-full justify-end my-3'>
                <p className='w-1/5 text-right'>: ایجاد کاربر</p>
              </span>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default UserProfilePage