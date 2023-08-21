// import dependencies
import { useEffect, useRef, useState } from 'react'
// import assets
import user from '../../assets/user.png'
// import hooks
import useToken from '../../hooks/useToken'
// import api
import { getAreasApi } from '../../api/areaApi'
import { getManagers } from '../../api/userApi'

function SchoolModal({school, changeModalStatus}) {


  const [areas, setAreas] = useState()
  const [managers, setManagers] = useState()

  const name = useRef(null)
  const code = useRef(null)
  const area_id = useRef(null)
  const manager_id = useRef(null)
  const [grade, setGrade] = useState<string>('normal')
  const [type, setType] = useState<string>('')
  const address = useRef(null)
  const phone_number = useRef(null)
  const [banner, setBanner] = useState<string>()
  const [logo, setLogo] = useState<string>()

  const { token } = useToken()

  useEffect(() => {
    getAreasApi(token)
        .then(res => setAreas(res.data.data))
        .catch(err => console.log(err))

    getManagers(token)
        .then(res => setManagers(res.data.data))
        .catch(err => console.log(err))
  }, [])

  const addSchool = () => {
    console.log({
        grade,
        type,
        banner,
        logo,
        name: name.current.value,
        code: code.current.value,
        phone_number: phone_number.current.value,
        address: address.current.value
    })
  }

  return (
    <>
        <div className=" absolute bg-black/50 h-screen w-screen top-0 z-10 flex justify-center items-center">
          <form onSubmit={(e) => (addSchool(), e.preventDefault())} className="bg-white rounded-xl p-10 w-1/2 h-4/5">
            <div className=" justify-end flex items-start">
              <div className="w-1/2 flex justify-end items-center">
                <span className=' h-36 justify-between flex flex-col -mr-5 z-10'>
                  <label htmlFor='file-uploaer' className=''>
                    <i className='fi fi-rr-edit flex text-xl p-3 rounded-full border bg-white'></i>
                    <input id='file-uploader' onChange={e => setBanner(e.target.value)} type="file" className='hidden' />
                  </label>
                  <i onClick={() => setBanner('')} className='fi fi-rr-delete flex text-xl p-3 rounded-full border bg-white'></i>
                </span>
                <img className='rounded-lg h-32 w-32' src={banner ? banner : user} alt="school image" />
              </div>
              <div className="w-1/2 flex justify-end items-center">
                <span className=' h-36 justify-between flex flex-col -mr-5 z-10'>
                  <label htmlFor='file-uploaer' className=''>
                    <i className='fi fi-rr-edit flex text-xl p-3 rounded-full border bg-white'></i>
                    <input id='file-uploader' onChange={e => setBanner(e.target.value)} type="file" className='hidden' />
                  </label>
                  <i onClick={() => setLogo('')} className='fi fi-rr-delete flex text-xl p-3 rounded-full border bg-white'></i>
                </span>
                <img className='rounded-lg h-32 w-32' src={logo ? logo : user} alt="school icon " />
              </div>
            </div>
            <div className='flex my-4'>
              <div className='w-1/2 pr-3'>
                <span className=' text-right'>
                  <label className='flex justify-end mt-5' >
                    <p className=' text-stone-400'>: نام مدرسه</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <input ref={name} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-5' >
                    <p className=' text-stone-400'>: نام ناحیه</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <input ref={area_id} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: نوع مدرسه</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <span className='flex justify-end items-center py-1'>
                    <div className='flex justify-end items-center '>
                      <label>دولتی</label>
                      <input onClick={() => setType('governmental')} value='governmental' name='type' type="radio" className=' h-4 w-4 ml-3' />
                    </div>
                    <div className=' flex justify-end items-center mx-7 '>
                      <label>سمپاد</label>
                      <input onClick={() => setType('sampad')} value='sampad' name='type' type="radio" className=' h-4 w-4 ml-3' />
                    </div>
                    <div className=' flex justify-end items-center'>
                      <label>غیر انتفاعی</label>
                      <input onClick={() => setType('non_profit')} value='non_profit' name='type' type="radio" className=' h-4 w-4 ml-3' />
                    </div>
                  </span>
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: کد</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <input ref={code} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
              </div>
              <div className='w-1/2 pl-3'>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: تلفن تماس</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <input ref={phone_number} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </span>
                <span className=' text-right flex flex-col items-center'>
                  <label className='flex justify-end mt-4 w-full' >
                    <p className=' text-stone-400'>: نام مدیر</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <button className='border border-[#009DF8] text-[#009DF8] rounded-lg px-3 py-3'>انتخاب مدیر</button>
                </span>
                <span className=' text-right'>
                  <label className='flex justify-end mt-4' >
                    <p className=' text-stone-400'>: سطح مدرسه</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                  </label>
                  <span className='flex justify-end items-center py-1'>
                    <div className='flex justify-end items-center '>
                      <label>ابتدایی</label>
                      <input onClick={() => setGrade('elementary')} value='elementary' name='grade' type="radio" className=' h-4 w-4 ml-3' />
                    </div>
                    <div className=' flex justify-end items-center mx-7'>
                      <label>دوره اول متوسطه</label>
                      <input onClick={() => setGrade('first_secondary')} value='first_secondary' name='grade' type="radio" className=' h-4 w-4 ml-3' />
                    </div>
                    <div className=' flex justify-end items-center'>
                      <label>دوره دوم متوسطه</label>
                      <input onClick={() => setGrade('second_secondary')} value='second_secondary' name='grade' type="radio" className=' h-4 w-4 ml-3' />
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

export default SchoolModal