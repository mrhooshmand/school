// import axios
import api from './config';

export const getCategoriesApi = async (token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.get("/api/admin/category")
    return response
}

export const getCategoryApi = async (categorieId: number, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.get(`/api/admin/category?id=${categorieId}`)
    return response
}

export const addCategoryApi = async (newCategory:object, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post("/api/admin/category", newCategory)
    return response
}

export const deleteCategoryApi = async (categoryId: number, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post(`/api/admin/category/${categoryId}`, { _method: 'delete'})
    return response
}

export const editCategoryApi = async (categoryId: number, newCategory:object, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.post(`/api/admin/category/${categoryId}`, newCategory)
    return response
}