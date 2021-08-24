export const ActionTypes = {
    FAILED_FETCH: "FAILED FETCH",
    product: {
        LOAD_DATA: "PRODUCT LOAD DATA"
    }
}

export type Action = {type: string, payload: string};

export const LOADDATA = (data: string): Action => ({
    type: ActionTypes.product.LOAD_DATA,
    payload: data
})