import {useState} from 'react'
// axios
import api from '../api/config'

const useToken = () => {
    const Cookie = {
        get: name => {
            const c = document.cookie.match(`(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`)[1]
            if (c) return decodeURIComponent(c)
            return ""
        },
        set: (name, value, opts = {}) => {
            if (opts.days) {
                opts['max-age'] = opts.days * 60 * 60 * 24;
                delete opts.days
            }
            opts = Object.entries(opts).reduce(
                (accumulatedStr, [k, v]) => `${accumulatedStr}; ${k}=${v}`, ''
            )
            document.cookie = `${name}=${encodeURIComponent(value)}${opts}`
        },
        delete: (name, opts) => Cookie.set(name, '', {'max-age': -1, ...opts})
    }

    const getToken = () => {
        const token = Cookie.get('token')
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        return token
    }

    const [token, setToken] = useState(getToken())

    const saveToken = (userToken) => {
        Cookie.set('token', userToken, {days: 2100})
        setToken(userToken)
    }

    const removeToken = () => {
        Cookie.delete('token')
        setToken("")
    }

    const setUserData = (user) => {
        Cookie.set('user', JSON.stringify(user), {days: 2100})
    }
    const getUserData = () => {
        const user = JSON.parse(Cookie.get('user'))
        return user
    }
    return {
        setToken: saveToken,
        removeToken,
        setUserData,
        getUserData,
        token
    }
}

export default useToken