const couriersState = {
  couriers: [],
  allCouriers: [],
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

export function CouriersReducer(state = couriersState, action) {
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
    case "GET_COURIERS":
      return {
        ...state,
        couriers: action.data,
      };
    case "GET_ALL_COURIERS":
      return {
        ...state,
        allCouriers: action.data,
      };
    case "GET_TOTAL_PAGINATION":
      return {
        ...state,
        totalPagination: action.data,
      };
    case "SET_PAGE_KURIR":
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
