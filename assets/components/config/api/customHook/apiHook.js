import { useDispatch, useSelector } from "react-redux"
import apiClient from ".."
import AXIOS_BASE from '../index'

export const version = {
    v1: 'v1',
    v2: 'v2',
}
export const service = {
    users: 'users',
    accounts: 'accounts',
    finance: 'finance',
}

export const method = {
    post: 'post',
    get: 'get',
    put: 'put',
    delete: 'delete'
}

export const ClientHit = (
    service,
    method,
    url,
    payload,
) => {

    if (method == 'post') {
        return AXIOS_BASE[service][method](
            url,
            payload,
        )
    }

    if (method == 'get') {
        return AXIOS_BASE[service][method](
            url,
        )
    }

    if (method == 'put') {
        return AXIOS_BASE[service][method](
            url,
            payload,
        )
    }
}