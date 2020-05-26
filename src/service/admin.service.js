import http from './http'
const api = '/api/admin';

export const addAdmin = (data) => {
    return http.post(`${api}/addAdmin`, data)
}

// get method without data
export const getAdmin = () =>{
    return http.get(`${api}/getAdmin`)
}

// get method with data
export const getAdminByMail = (data) =>{
    return http.get(`${api}/getAdminByMail`, data)
}

export const updateAdminByMail = (data) => {
    return http.put(`${api}/updateAdminByMail/${data.oldMailid}/${data.newMailId}`)
}

export const deletAdminById = (data) => {
    return http.delete(`${api}/deletAdminById/${data._id}`)
}

export default {
    addAdmin,
    getAdmin,
    getAdminByMail,
    updateAdminByMail,
    deletAdminById
}