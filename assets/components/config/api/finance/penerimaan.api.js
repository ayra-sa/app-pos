import axios from "axios";
import apiClient, { PATH } from "../index";
import { ClientHit, method, service, version } from "../customHook/apiHook";
import moment from "moment";

export function ActGetPenerimaan(
    setloading,
    setinitialData
) {
    return (dispatch, getState) => {
        setloading(true)
        const { search, limit, page, start_date, end_date } = getState()?.PenerimaanReducer?.params
        const start = moment(start_date).format('YYYY-MM-DD');
        const end = moment(end_date).format('YYYY-MM-DD');

        return new Promise((resolve, reject) => {
            const url = `/api/${version?.v1}/g/${service?.finance}/transactions?search=${search}&limit=${limit}&page=${page}&start_date=${start}&end_date=${end}&flag=CR`
            const payload = {}

            ClientHit('SERVICE_ACCOUNTING', method?.get, url, payload)
                .then((res) => {
                    setinitialData(true)
                    dispatch({
                        type: 'SET_RESPON_API_PENERIMAAN',
                        data: res?.data?.data
                    })
                    setTimeout(() => {
                        setloading(false)
                    }, 2000);
                })
                .catch(function (error) {
                    setinitialData(true)
                    setloading(false)
                    dispatch({
                        type: 'ERROR_PAGE',
                        error: true,
                        msg: error?.response?.data?.message
                    })
                    setTimeout(() => {
                        dispatch({
                            type: 'ERROR_PAGE',
                            error: false,
                            msg: ''
                        })
                    }, 2000);
                });

        })
    };
}

export function ActAddPenerimaan(
    values,
    history,
    setmodalError,
    settitleRespon,
    setmodalLoading,
    setisModalUp,
    setmodalSukses,
    setloading,
) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const url = `/api/${version?.v1}/g/${service?.finance}/transactions`
            const payload = {
                transaction: {
                    account: {
                        id: values?.accountId,
                    },
                    group_code: values?.group_code,
                    receipt_number: values?.receipt_number,
                    transaction_date: values?.transaction_date,
                    // "2024-08-04"
                    transaction_type: "CR",
                    currency: values?.currency,
                    remark: values?.remark,
                    details: values?.details
                    // [
                    //     {
                    //         account: {
                    //             id: 3
                    //         },
                    //         amount: 200.00
                    //     }
                    // ]
                }
            }

            setmodalLoading(true);
            ClientHit('SERVICE_ACCOUNTING', method?.post, url, payload)
                .then((res) => {
                    settitleRespon('Berhasil add data')
                    setmodalSukses(true)
                    setmodalLoading(false)
                    setTimeout(() => {
                        setmodalSukses(false)
                        setisModalUp(false)
                        history.push('/finance/penerimaan/')
                    }, 3000);
                })
                .catch(function (error) {
                    setmodalError(true)
                    settitleRespon(error?.response?.data?.message)
                    setmodalLoading(false)
                    setTimeout(() => {
                        setmodalError(false)
                    }, 3000);
                });

        })
    };
}