import { useDispatch } from "react-redux"
import { api } from "../config"
import { ActionTypes } from "./actions"

const dispatch = useDispatch()
export const Product = {
    load_data: async () => {
        try {
            const response = await api().get("/product")
            return response.data       
        } catch (err) {
            dispatch(ActionTypes.FAILED_FETCH)
        }
    }
}