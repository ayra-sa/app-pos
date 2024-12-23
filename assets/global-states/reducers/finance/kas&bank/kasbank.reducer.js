const accountType = {
  params: {
    search: "",
    page: 1,
    limit: 10,
  },
  respon: {
    data: [],
  },
};

export function AccountTypeReducer(state = accountType, action) {
  switch (action.type) {
    case "SET_SEARCH_ACCOUNT_TYPE":
      return {
        ...state,
        params: {
          ...state.params,
          search: action?.search,
        },
      };
    case "SET_LIMIT_ACCOUNT_TYPE":
      return {
        ...state,
        params: {
          ...state.params,
          limit: action?.limit,
        },
      };
    case "SET_PAGE_ACCOUNT_TYPE":
      return {
        ...state,
        params: {
          ...state.params,
          page: action?.page,
        },
      };
    case "SET_RESPON_API_ACCOUNT_TYPE":
      return {
        ...state,
        respon: {
          ...state.params,
          data: action?.data,
        },
      };
    default:
      return state;
  }
}

const kasBankState = {
  estimatedDatas: [],
  estimateDatasByType: [],
  allEstimatedDatas: [],
  isLoadingAction: false,
  isLoading: false,
  totalPagination: 1,
  page: 1,
  typeAkun: [],
  params: {
    search: "",
    page: 1,
    limit: 10,
    categories: "ASSET",
    // EQUITY LIABILITY INCOME EXPENSE
    order_type: "ASC",
  },
  respon: {
    data: [],
  },
  details: {
    data: {},
  },
  isModalUpSuccessConfirmation: {
    isUp: false,
    title: "",
  },
  isModalUpFailedConfirmation: {
    isUp: false,
    title: "",
    desc: "",
  },
};

export function KasBankReducer(state = kasBankState, action) {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.data,
      };
    case "IS_LOADING_ACTION":
      return {
        ...state,
        isLoadingAction: action.data,
      };
    case "GET_ESTIMATED_DATAS_BY_TYPE":
      return {
        ...state,
        estimateDatasByType: action.data,
        estimatedDatas: [],
      };
    case "GET_ESTIMATED_DATAS":
      return {
        ...state,
        estimatedDatas: action.data,
        estimateDatasByType: [],
      };
    case "GET_ALL_ESTIMATED_DATAS":
      return {
        ...state,
        allEstimatedDatas: action.data,
      };
    case "GET_TYPE_AKUN":
      return {
        ...state,
        typeAkun: action.data,
      };
    case "GET_TOTAL_PAGINATION":
      return {
        ...state,
        totalPagination: action.data,
      };
    case "GET_PAGINATION":
      return {
        ...state,
        page: action.data,
      };
    case "SET_SEARCH_KAS_BANK":
      return {
        ...state,
        params: {
          ...state.params,
          search: action?.search,
        },
      };
    case "SET_LIMIT_KAS_BANK":
      return {
        ...state,
        params: {
          ...state.params,
          limit: action?.limit,
        },
      };
    case "SET_PAGE_KAS_BANK":
      return {
        ...state,
        params: {
          ...state.params,
          page: action?.page,
        },
      };
    case "SET_CATEGORIES_KAS_BANK":
      return {
        ...state,
        params: {
          ...state.params,
          categories: action?.categories,
        },
      };
    case "SET_RESPON_API_KAS_BANK":
      return {
        ...state,
        respon: {
          ...state.params,
          data: action?.data,
        },
      };
    case "SET_DETAILS_KAS_BANK":
      return {
        ...state,
        details: {
          ...state.details,
          data: action?.details,
        },
      };
    case "IS_MODAL_UP_SUCCESS_CONFIRMATION":
      return {
        ...state,
        isModalUpSuccessConfirmation: {
          isUp: action.data.isUp,
          title: action.data.title,
        },
      };
    case "IS_MODAL_UP_FAILED_CONFIRMATION":
      return {
        ...state,
        isModalUpFailedConfirmation: {
          isUp: action.data.isUp,
          title: action.data.title,
          desc: action.data.desc,
        },
      };
    default:
      return state;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  KasBankReducer,
  AccountTypeReducer,
};
