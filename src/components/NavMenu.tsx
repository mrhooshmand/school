// import dependencies
import {useEffect, useState} from 'react'
// import assets
import userImg from '../assets/user.png'
// import api functions
import {getUserApi} from '../api/userApi'
// import hooks
import useToken from '../hooks/useToken'
import {Link, useLocation} from 'react-router-dom'
// import interfaces
import {User_} from '../interfaces/userInterface'

function NavMenu() {

    const path = useLocation().pathname

    const [showSchoolSubLinks, setShowSchoolSubLinks] = useState<boolean>(false)
    const [showSettingSubLinks, setShowSettingSubLinks] = useState<boolean>(false)

    const [user, setUser] = useState<User_>()
    const [err, setErr] = useState()

    const {token,getUserData} = useToken()
    const userData=getUserData();

    useEffect(() => {
        getUserApi(1, token)
            .then(res => setUser(res.data.data[0]))
            .catch(err => setErr(err))
    }, [])

    return (
        <>
            {user &&
                <nav className=" w-1/5 h-full bg-[#1D1F2C] px-2 py-10 text-white">
          <span className=" bg-white/10 rounded-xl mx-4 items-center mb-10 px-4 py-4 flex justify-end">
            <p>{userData.first_name} {userData.last_name}</p>
            <img className=" rounded-full h-10 w-10 ml-5" src={userImg} alt="user image"/>
          </span>
                    <ul>
                        <Link to={'/users'}>
                            <li className={`flex justify-end w-full cursor-pointer ${path.includes('user') && 'bg-white/10'} py-3 px-4 rounded-lg`}>
                                <p>مدیریت کاربران</p>
                                <i className='text-xl fi flex fi-rr-user ml-3'></i>
                            </li>
                        </Link>
                        <Link to={'/courses'}>
                            <li className={`flex justify-end w-full cursor-pointer ${path.includes('course') && 'bg-white/10'} py-3 px-4 rounded-lg`}>
                                <p>مدیریت دوره ها</p>
                                <i className='text-xl fi flex fi-rr-document ml-3'></i>
                            </li>
                        </Link>
                        <Link to={'/users'}>
                            <li className={`flex justify-end w-full cursor-pointer ${false && 'bg-white/10'} py-3 px-4 rounded-lg`}>
                                <p>مدیریت اردوها</p>
                                <i className='text-xl flex fi fi-rr-document ml-3'></i>
                            </li>
                        </Link>
                        <li>
                            <ul>
                                <div onClick={() => setShowSchoolSubLinks(!showSchoolSubLinks)}
                                     className={`flex justify-between cursor-pointer items-center w-full ${showSchoolSubLinks && 'bg-white/10'} py-3 px-4 rounded-lg`}>
                                    <span
                                        className={`material-symbols-outlined text-xl ${showSchoolSubLinks && ' rotate-180'} `}>expand_more</span>
                                    <span className='flex items-center'>
                    <p>مدیریت  مدرسه مهارت</p>
                    <i className='text-xl flex fi fi-rr-document ml-3'></i>
                  </span>
                                </div>
                                {showSchoolSubLinks &&
                                    <>
                                        <Link to={'/'}>
                                            <li className='flex justify-end items-center my-6 mr-10'>
                                                <p>مدیریت پایگاه ها</p>
                                                <span className=' rounded-full h-2 w-2 ml-4 bg-stone-200'></span>
                                            </li>
                                        </Link>
                                        <Link to={'/'}>
                                            <li className='flex justify-end items-center my-6 mr-10'>
                                                <p>مدیریت رشته ها</p>
                                                <span className=' rounded-full h-2 w-2 ml-4 bg-stone-200'></span>
                                            </li>
                                        </Link>
                                    </>
                                }
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <div onClick={() => setShowSettingSubLinks(!showSettingSubLinks)}
                                     className={`flex cursor-pointer justify-between items-center w-full ${showSettingSubLinks && 'bg-white/10'} py-3 px-4 rounded-lg`}>
                                    <span
                                        className={`material-symbols-outlined text-xl ${showSettingSubLinks && ' rotate-180'} `}>expand_more</span>
                                    <span className='flex items-center'>
                    <p>تنظیمات</p>
                    <i className='text-xl flex fi fi-rr-document ml-3'></i>
                  </span>
                                </div>
                                {showSettingSubLinks &&
                                    <>
                                        <Link to={'/areas'}>
                                            <li className='flex justify-end items-center my-6 mr-10'>
                                                <p>مدیریت نواحی </p>
                                                <span className=' rounded-full h-2 w-2 ml-4 bg-stone-200'></span>
                                            </li>
                                        </Link>
                                        <Link to={'/schools'}>
                                            <li className='flex justify-end items-center my-6 mr-10'>
                                                <p>مدیریت مدارس</p>
                                                <span className=' rounded-full h-2 w-2 ml-4 bg-stone-200'></span>
                                            </li>
                                        </Link>
                                        <Link to={'/categories'}>
                                            <li className='flex justify-end items-center my-6 mr-10'>
                                                <p>دسته بندی ها</p>
                                                <span className=' rounded-full h-2 w-2 ml-4 bg-stone-200'></span>
                                            </li>
                                        </Link>
                                        <Link to={'/attributes'}>
                                            <li className='flex justify-end items-center my-6 mr-10'>
                                                <p>مدیریت ویژگی ها</p>
                                                <span className=' rounded-full h-2 w-2 ml-4 bg-stone-200'></span>
                                            </li>
                                        </Link>
                                    </>
                                }
                                <Link to={'/login'}>
                                    <li className='flex justify-end items-center my-6 mr-10'>
                                        <p>خروج</p>
                                        <span className=' rounded-full h-2 w-2 ml-4 bg-stone-200'></span>
                                    </li>
                                </Link>
                            </ul>
                        </li>
                    </ul>
                </nav>
            }
        </>
    )
}

export default NavMenu