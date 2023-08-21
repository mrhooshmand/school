// imoort dependencies
import {useRef, useState, useEffect} from 'react'
// import assets
import login from '../assets/login.jpg'
// import api function
import {loginApi} from '../api/loginApi'
// import hooks
import useToken from '../hooks/useToken'
// import interfaces
import {User_} from '../interfaces/userInterface'

function LoginPage() {

    const mobile_number = useRef(null)
    const password = useRef(null)

    const [user, setUser] = useState<User_>()
    const [error, setError] = useState()

    const {setToken, removeToken,setUserData} = useToken()

    const sendLoginInfo = () => {
        loginApi({mobile_number: mobile_number.current.value, password: password.current.value})
            .then(res => setUser(res.data.data))
            .catch(err => setError(err))
    }
    // useEffect(() => {
    //     removeToken()
    // }, [])
    useEffect(() => {
        if (user && user.access_token) {
            setToken(user.access_token)
            setUserData(user)
            window.location.href = 'http://localhost:5173/users';
        }
    }, [user])

    return (
        <div className=" flex justify-center items-center w-full h-full">
            <div className="bg-white rounded-xl w-1/2 h-4/6 shadow-xl flex">
                <form onSubmit={e => (sendLoginInfo(), e.preventDefault())}
                      className="w-1/2 flex flex-col items-center justify-center">
                    <p className=" text-xl text-right w-4/6 mb-12 font-semibold">ورود کاربر</p>
                    <span className="w-4/6 mb-6">
                        <p className="text-right text-stone-400">شماره همراه</p>
                        <input ref={mobile_number}
                               className="border-b focus:outline-none border-[#009DF8] py-1.5 w-full" type="text"/>
                    </span>
                    <span className="w-4/6">
                        <p className="text-right text-stone-400">رمز عبور</p>
                        <input ref={password} className="border-b focus:outline-none border-[#009DF8] py-1.5 w-full"
                               type="text"/>
                    </span>
                    {error && <p className='text-red-500 mt-2'>اطلاعات کاربری اشتباه است</p>}
                    <button type='submit'
                            className="bg-[#009DF8] shadow-xl focus:outline-none shadow-sky-200 text-white w-1/3 mt-16 py-2 rounded-lg text-lg">ورود
                    </button>
                </form>
                <img className="h-full w-1/2 object-cover rounded-r-xl" src={login} alt="login image"/>
            </div>
        </div>
    )
}

export default LoginPage