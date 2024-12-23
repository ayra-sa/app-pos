const initialState = {
    data: null
}

const defaultAkunReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PREFERENCE_ACCOUNTS_REQUEST':
        return {
          ...state,
        };
      case 'FETCH_PREFERENCE_ACCOUNTS_SUCCESS':
        return {
          ...state,
          data: action.payload.data,
        };
      case 'FETCH_PREFERENCE_ACCOUNTS_FAIL':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default defaultAkunReducer;
  