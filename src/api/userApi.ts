// import axios
import api from './config';

export const getUsersApi = async (token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.get("/api/admin/user")
    return response
}

export const getUserApi = async (userId: number, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.get(`/api/admin/user?id=${userId}`)
    return response
}

export const getManagers = async (token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.get('/api/admin/user?type=school_manager')
    return response
}

export const addUserApi = async (newUser:object, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post("/api/admin/user", newUser)
    return response
}

export const deleteUserApi = async (userId: number, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post(`/api/admin/user/${userId}`, { _method: 'delete'})
    return response
}

export const editUserApi = async (userId: number, newUser:object, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post(`/api/admin/user/${userId}`, newUser)
    return response
}

