// import axios
import api from './config';

export const loginApi = async (value:object) => {
    const response = await api.post("/api/admin/auth/login_pass", value)
    return response
}