// import dependencies
import { useState } from 'react'
// import hooks
import useToken from '../../hooks/useToken'
// import assets
import user from '../../assets/user.png'
// import api functions
import { addAttributeApi } from '../../api/attributeApi'


function AttributeModal({attribute, changeModalStatus}) {

  const [title, setTitle] = useState<string>(attribute && attribute.title)
  const [icon, setIcon] = useState<string>(attribute && attribute.icon)

  const { token } = useToken()

  const addAttribute = () => {
    addAttributeApi({ title, icon }, token)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
  }

  return (
    <>
        <div className=" absolute bg-black/50 h-screen w-screen top-0 z-10 flex justify-center items-center">
          <form onSubmit={(e) => (addAttribute(), e.preventDefault())} className="bg-white rounded-xl p-10 w-1/2 h-2/5 flex flex-col items-end justify-between">
            <div className='flex items-end flex-col w-full'>
                <div className=" mb-6 flex justify-end items-center">
                    <span className=' h-28 justify-between flex flex-col -mr-5 z-10'>
                    <label htmlFor='file-uploaer' className=''>
                        <i className='fi fi-rr-edit flex text-lg p-2 rounded-full border bg-white'></i>
                        <input id='file-uploader' onChange={e => setIcon(e.target.value)} type="file" className='hidden' />
                    </label>
                    <i onClick={() => setIcon('')} className='fi fi-rr-delete flex text-lg p-2 rounded-full border bg-white'></i>
                    </span>
                    <img className='rounded-lg h-20 w-20' src={icon ? icon : user} alt="attribute icon" />
                </div>
                <div className='text-right w-1/2'>
                    <label className='flex justify-end' >
                    <p className=' text-stone-400'>: نام ویژگی</p>
                    <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                    </label>
                    <input onChange={e => setTitle(e.target.value)} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
                </div>
            </div>
            <div className='flex w-full justify-start mt-6'>
              <button type='submit' className=' text-white bg-[#009DF8] rounded-md px-6 py-3 mr-3.5'>{ attribute ? 'ویرایش' : 'افزودن' }</button>
              <button onClick={() => changeModalStatus()} className=' bg-slate-100 text-[#009DF8] rounded-md px-6 py-3.5'>لغو</button>
            </div>
          </form>
        </div>
    </>
  )
}

export default AttributeModal