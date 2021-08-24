import { Action, ActionTypes } from "./actions";

export interface AppState {

}

const initialState = {

}

export const AppReducer = async (state: AppState = initialState, action: Action) => {
switch (action.type) {
    case ActionTypes.product.LOAD_DATA:
        return {
            ...state, data: action.payload,
        }
    case ActionTypes.FAILED_FETCH:
        return {
            ...state,
        }
    default:
        return {
            ...state
        }
    }
}