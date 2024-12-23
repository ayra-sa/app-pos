import moment from "moment";

const penerimaan = {
    params: {
        search: '',
        page: 1,
        limit: 10,
        start_date: new Date(),
        end_date: new Date(),
    },
    respon: {
        data: [],
    },
    details: {
        data: {},
    },
}

export function PenerimaanReducer(state = penerimaan, action) {
    switch (action.type) {
        case "SET_START_DATE_PENERIMAAN":
            return {
                ...state,
                params: {
                    ...state.params,
                    start_date: action?.start_date
                },
            };
        case "SET_END_DATE_PENERIMAAN":
            return {
                ...state,
                params: {
                    ...state.params,
                    end_date: action?.end_date
                },
            };
        case "SET_SEARCH_PENERIMAAN":
            return {
                ...state,
                params: {
                    ...state.params,
                    search: action?.search
                },
            };
        case "SET_LIMIT_PENERIMAAN":
            return {
                ...state,
                params: {
                    ...state.params,
                    limit: action?.limit
                },
            };
        case "SET_PAGE_PENERIMAAN":
            return {
                ...state,
                params: {
                    ...state.params,
                    page: action?.page
                },
            };
        case "SET_RESPON_API_PENERIMAAN":
            return {
                ...state,
                respon: {
                    ...state.params,
                    data: action?.data
                },
            };
        case "SET_DETAILS_PENERIMAAN":
            return {
                ...state,
                details: {
                    ...state.details,
                    data: action?.details
                },
            };
        default:
            return state;
    }
}

export default {
    PenerimaanReducer,
}