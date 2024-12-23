const kasbank = {
    params: {
        search: '',
        page: 1,
        limit: 10,
        categories: 'ASSET',
        // EQUITY LIABILITY INCOME EXPENSE
        order_type: 'ASC',
    },
    respon: {
        data: [],
    },
    details: {
        data: {},
    },
}

const accountType = {
    params: {
        search: '',
        page: 1,
        limit: 10,
    },
    respon: {
        data: []
    }
}

// active section
const initialState = {
    activeSection: 'kasbank',
};

export function AccountTypeReducer(state = accountType, action) {
    switch (action.type) {
        case "SET_SEARCH_ACCOUNT_TYPE":
            return {
                ...state,
                params: {
                    ...state.params,
                    search: action?.search
                },
            };
        case "SET_LIMIT_ACCOUNT_TYPE":
            return {
                ...state,
                params: {
                    ...state.params,
                    limit: action?.limit
                },
            };
        case "SET_PAGE_ACCOUNT_TYPE":
            return {
                ...state,
                params: {
                    ...state.params,
                    page: action?.page
                },
            };
        case "SET_RESPON_API_ACCOUNT_TYPE":
            return {
                ...state,
                respon: {
                    ...state.params,
                    data: action?.data
                },
            };
        default:
            return state;
    }
}

export function KasbankReducer(state = kasbank, action) {
    switch (action.type) {
        case "SET_SEARCH_KAS_BANK":
            return {
                ...state,
                params: {
                    ...state.params,
                    search: action?.search
                },
            };
        case "SET_LIMIT_KAS_BANK":
            return {
                ...state,
                params: {
                    ...state.params,
                    limit: action?.limit
                },
            };
        case "SET_PAGE_KAS_BANK":
            return {
                ...state,
                params: {
                    ...state.params,
                    page: action?.page
                },
            };
        case "SET_CATEGORIES_KAS_BANK":
            return {
                ...state,
                params: {
                    ...state.params,
                    categories: action?.categories
                },
            };
        case "SET_RESPON_API_KAS_BANK":
            return {
                ...state,
                respon: {
                    ...state.params,
                    data: action?.data
                },
            };
        case "SET_DETAILS_KAS_BANK":
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

export function ActiveSectionReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_ACTIVE_SECTION':
        return { ...state, activeSection: action.payload };
      default:
        return state;
    }
};

export default {
    KasbankReducer,
    AccountTypeReducer,
    ActiveSectionReducer
}