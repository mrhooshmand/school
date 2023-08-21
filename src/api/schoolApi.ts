// import axios
import api from './config';

export const getSchoolsApi = async (token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.get("/api/admin/school")
    return response
}

export const getSchoolApi = async (schoolId: number, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.get(`/api/admin/school?id=${schoolId}`)
    return response
}

export const addSchoolApi = async (newSchool:object, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post("/api/admin/school", newSchool)
    return response
}

export const deleteSchoolApi = async (schoolId: number, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post(`/api/admin/school/${schoolId}`, { _method: 'delete'})
    return response
}

export const editSchoolApi = async (schoolId: number, newSchool:object, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post(`/api/admin/school/${schoolId}`, newSchool)
    return response
}