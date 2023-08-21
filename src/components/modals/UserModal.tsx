// import dependencies
import { useRef, useState } from 'react'
// import assets
import user from '../../assets/user.png'
import {addUserApi,} from "../../api/userApi.ts";
import useToken from "../../hooks/useToken.ts";

function UserModal({user, changeModalStatus}) {

  const first_name = useRef(null)
  const last_name = useRef(null)
  const father_name = useRef(null)
  const birth_date = useRef(null)
  const [type, setType] = useState<string>('normal')
  const [avatar, setAvatar] = useState<string>('')
  const school_id = useRef(null)
  const mobile_number = useRef(null)
  const [gender, setgender] = useState<string>('male')
  const address = useRef(null)
  const city = useRef(null)
  const [status, setStatus] = useState<string>('active')
  const national_code = useRef(null)
  const status_description = useRef(null)
  const password = useRef(null)
  const { token } = useToken()

  const addUser = () => {
    addUserApi({
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      father_name: father_name.current.value,
      avatar,
      birth_date: birth_date.current.value,
      type,
      school_id: school_id.current.value,
      mobile_number: mobile_number.current.value,
      gender,
      address: address.current.value,
      city: city.current.value,
      status,
      national_code: national_code.current.value,
      status_description: status_description.current.value,
      password: password.current.value
    },token)
        .then(res => {
          console.log(res)})
        .catch(err => console.log(err))
  }

  return (
    <>
        <div className=" absolute bg-black/50 h-screen w-screen top-0 z-10 flex justify-center items-center">
          <form onSubmit={(e) => (addUser(), e.preventDefault())} className="bg-white rounded-xl overflow-y-scroll p-10 w-1/2 h-3/4">
            <div className=" justify-end flex items-start">
              <div className="w-1/2 flex flex-col text-right">
                <label className=' flex justify-end'>
                  <p className=' text-stone-400'>: نوع کاربر</p>
                  <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                </label>
                <div className='flex justify-end items-center py-4 pr-3'>
                  <span className=' text-right mr-3.5'>
                    <p> کارمند آموزش و پرورش</p>
                    <p className=' text-stone-400 text-sm'>کاربر کارمند آموزش و پرورش است</p>
                  </span>
                  <input onClick={() => setType('gov')} name='type' type="radio" className=' h-4 w-4' />
                </div>
                <div className='flex justify-end items-center border-y border-dashed py-4 pr-3'>
                  <span className=' text-right mr-3.5'>
                    <p>دانش آموز</p>
                    <p className=' text-stone-400 text-sm'>کاربر دانش آموز است</p>
                  </span>
                  <input onClick={() => setType('normal')} name='type' type="radio" className=' h-4 w-4' />
                </div>
                <div className='flex justify-end items-center py-4 pr-3'>
                  <span className=' text-right mr-3.5'>
                    <p>مدیر مدرسه</p>
                    <p className=' text-stone-400 text-sm'>کاربر مدیر مدرسه است</p>
                  </span>
                  <input onClick={() => setType('school_manager')}  name='type' type="radio" className=' h-4 w-4' />
                </div>
                <div className='flex justify-end items-center border-y border-dashed py-4 pr-3'>
                  <span className=' text-right mr-3.5'>
                    <p>مدرس دوره</p>
                    <p className=' text-stone-400 text-sm'>کاربر مدرس دوره است</p>
                  </span>
                  <input onClick={() => setType('course_teacher')} name='type' type="radio" className=' h-4 w-4' />
                </div>
                <div className='flex justify-end items-center py-4 pr-3'>
                  <span className=' text-right mr-3.5'>
                    <p>مدیر سامانه</p>
                    <p className=' text-stone-400 text-sm'>کاربر مدیر سامانه است</p>
                  </span>
                  <input onClick={() => setType('admin')} name='type' type="radio" className=' h-4 w-4' />
                </div>
              </div>
              <div className="w-1/2 flex justify-end items-center">
                <span className=' h-36 justify-between flex flex-col -mr-5 z-10'>
                  <label htmlFor='file-uploaer' className=''>
                    <i className='fi fi-rr-edit flex text-xl p-3 rounded-full border bg-white'></i>
                    <input id='file-uploader' onChange={e => setAvatar(e.target.value)} type="file" className='hidden' />
                  </label>
                  <i onClick={() => setAvatar('')} className='fi fi-rr-delete flex text-xl p-3 rounded-full border bg-white'></i>
                </span>
                <img className='rounded-lg h-32 w-32' src={avatar ? avatar : user} alt="user image" />
              </div>
            </div>
            <div className='flex my-4'>
              <div className='w-1/2 pr-3'>
                <span className=' text-right'>
                  <label className='flex justify-end' >
                    <p className=' text-stone-400'>: نام خانوادگی</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <input ref={last_name} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: تاریخ تولد</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <input ref={birth_date} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: نام مدرسه</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <input ref={school_id} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: تلفن همراه </p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <input ref={mobile_number} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: جنسیت</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <span className='flex justify-end items-center py-1'>
                    <div className='flex justify-end items-center mr-10'>
                      <label>دختر</label>
                      <input onClick={() => setgender('female')} value='female' name='gender' type="radio" className=' h-4 w-4 ml-3' />
                    </div>
                    <div className=' flex justify-end items-center'>
                      <label>پسر</label>
                      <input onClick={() => setgender('male')} value='male' name='gender' type="radio" className=' h-4 w-4 ml-3' />
                    </div>
                  </span>
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: آدرس</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <textarea ref={address} className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
              </div>
              <div className='w-1/2 pl-3'>
                <span className=' text-right'>
                  <label className='flex justify-end' >
                    <p className=' text-stone-400'>: نام</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <input ref={first_name} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: نام پدر</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <input ref={father_name} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: کد ملی</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <input ref={national_code} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: نام شهر</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <input ref={city} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: وضعیت</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <span className='flex justify-end items-center py-1'>
                    <div className='flex justify-end items-center mr-10'>
                      <label>فعال</label>
                      <input onClick={() => setStatus('active')} value='active' name='status' type="radio" className=' h-4 w-4 ml-3' />
                    </div>
                    <div className=' flex justify-end items-center'>
                      <label>غیر فعال</label>
                      <input onClick={() => setStatus('de_active')} value='de-active' name='status' type="radio" className=' h-4 w-4 ml-3' />
                    </div>
                  </span>
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: شرح وضعیت</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <textarea ref={status_description} className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: رمز عبور</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <input ref={password} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
              </div>
            </div>
            <div className='flex justify-start mt-6'>
              <button type='submit' className=' text-white bg-[#009DF8] rounded-md px-6 py-3 mr-3.5'>افزودن</button>
              <button onClick={() => changeModalStatus()} className=' bg-slate-100 text-[#009DF8] rounded-md px-6 py-3.5'>لغو</button>
            </div>
          </form>
        </div>
    </>
  )
}

export default UserModal