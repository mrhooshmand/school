// import dependencies
import { useState } from 'react'
// import hooks
import useToken from '../../hooks/useToken'
// import api functions
import { addAreaApi, editAreaApi } from '../../api/areaApi'


function AreaModal({area, changeModalStatus}) {

  const [name, setName] = useState<string>(area ? area.name : '')

  const { token } = useToken()

  const areaAction = () => {
    area ?
    editAreaApi(area.id, {name}, token)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    : addAreaApi({ name }, token)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
  }

  return (
    <>
        <div className=" absolute bg-black/50 h-screen w-screen top-0 z-10 flex justify-center items-center">
          <form onSubmit={(e) => (areaAction(), e.preventDefault())} className="bg-white rounded-xl p-10 w-1/2 h-1/4 flex flex-col items-end justify-between">
            <span className='text-right w-1/2'>
                <label className='flex justify-end' >
                <p className=' text-stone-400'>: نام ناحیه</p>
                <sup className='text-red-500 mt-2 ml-2 text-lg'>*</sup>
                </label>
                <input onChange={e => setName(e.target.value)} value={name} type="text" className=' focus:outline rounded-lg border px-3 py-2 text-right w-full' />
            </span>
            <div className='flex w-full justify-start mt-6'>
              <button type='submit' className=' text-white bg-[#009DF8] rounded-md px-6 py-3 mr-3.5'>{area ? 'ویرایش' : 'افزودن'}</button>
              <button onClick={() => changeModalStatus()} className=' bg-slate-100 text-[#009DF8] rounded-md px-6 py-3.5'>لغو</button>
            </div>
          </form>
        </div>
    </>
  )
}

export default AreaModal