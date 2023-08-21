// import axios
import api from './config';

export const getAreasApi = async (token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.get("/api/admin/area")
    return response
}

export const getAreaApi = async (areaId: number, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.get(`/api/admin/area?id=${areaId}`)
    return response
}

export const addAreaApi = async (newArea:object, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post("/api/admin/area", newArea)
    return response
}

export const deleteAreaApi = async (areaId: number, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post(`/api/admin/area/${areaId}`, { _method: 'delete'})
    return response
}

export const editAreaApi = async (areaId: number, newArea:object, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post(`/api/admin/area/${areaId}`, newArea)
    return response
}