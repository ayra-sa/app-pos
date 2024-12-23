const initialState = {
  mainProducts: [],
  products: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MAIN_PRODUCTS_REQUEST":
    case "FETCH_INIT_PRODUCT_ACCOUNT_REQUEST":
    case "FETCH_PRODUCTS_REQUEST":
    case "CREATE_MAIN_PRODUCT_REQUEST":
    case "DELETE_MAIN_PRODUCT_REQUEST":
      return { ...state, loading: true };

    case "FETCH_MAIN_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        mainProducts: action.payload.mainProducts,
        error: null,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        error: null,
      };

    case "CREATE_MAIN_PRODUCT_SUCCESS":
    case "DELETE_MAIN_PRODUCT_SUCCESS":
      return { ...state, loading: false, error: null };

    case "FETCH_MAIN_PRODUCTS_FAILURE":
    case "CREATE_MAIN_PRODUCT_FAILURE":
    case "DELETE_MAIN_PRODUCT_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default productReducer;
