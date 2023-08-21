// import axios
import api from './config';

export const getAttributesApi = async (token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.get("/api/admin/attribute")
    return response
}

export const getAttributeApi = async (attributeId: number, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.get(`/api/admin/attribute?id=${attributeId}`)
    return response
}

export const addAttributeApi = async (newAttribute:object, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post("/api/admin/attribute", newAttribute)
    return response
}

export const deleteAttributeApi = async (attributeId: number, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post(`/api/admin/attribute/${attributeId}`, { _method: 'delete'})
    return response
}

export const editAttributeApi = async (attributeId: number, newAttribute:object, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post(`/api/admin/attribute/${attributeId}`, newAttribute)
    return response
}