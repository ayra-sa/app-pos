const supliersState = {
  suppliers: [],
  allSuppliers: [],
  isLoadingAction: false,
  isLoading: false,
  isModalUpSuccessConfirmation: {
    isUp: false,
    title: "",
  },
  isModalUpFailedConfirmation: {
    isUp: false,
    title: "",
  },
  totalPagination: 1,
  page: 1,
};

export function SupliersReducer(state = supliersState, action) {
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
    case "GET_SUPPLIERS":
      return {
        ...state,
        suppliers: action.data,
      };
    case "GET_ALL_SUPPLIERS":
      return {
        ...state,
        allSuppliers: action.data,
      };
    case "GET_TOTAL_PAGINATION":
      return {
        ...state,
        totalPagination: action.data,
      };
    case "SET_PAGE_SUPPLIER":
      return {
        ...state,
        page: action?.data,
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
        },
      };
    default:
      return state;
  }
}
