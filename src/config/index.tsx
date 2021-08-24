import axios from "axios"

export const BASE_URL="http://localhost:3000/api/v1"

export const api = (token?: string) => {
    if (token) {   
        return axios.create({
            baseURL: BASE_URL,
            headers: {
                Authorization: token
            }
        })
    } else {
        return axios.create({
            baseURL: BASE_URL,
            headers: {
                Authorization: token
            }
        })
    }
}