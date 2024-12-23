import {
  FETCH_BRANDS_REQUEST,
  FETCH_BRANDS_SUCCESS,
  FETCH_BRANDS_FAILURE,
  CREATE_BRAND_REQUEST,
  CREATE_BRAND_SUCCESS,
  CREATE_BRAND_FAILURE,
  EDIT_BRAND_REQUEST,
  EDIT_BRAND_SUCCESS,
  EDIT_BRAND_FAILURE,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_BRAND_FAILURE,
  FETCH_BRAND_REQUEST,
  FETCH_BRAND_FAILURE,
  FETCH_BRAND_SUCCESS,
} from "global-states/types/brandTypes";

const initialState = {
  data: [],
  dataDetail: null,
  meta: {},
  links: {},
  error: null,
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRANDS_REQUEST:
    case FETCH_BRAND_REQUEST:
    case CREATE_BRAND_REQUEST:
    case EDIT_BRAND_REQUEST:
    case DELETE_BRAND_REQUEST:
      return { ...state, error: null };

    case FETCH_BRANDS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        meta: action.payload.meta,
        links: action.payload.links,
      };

    case FETCH_BRAND_SUCCESS:
      return {
        ...state,
        dataDetail: action.payload,
      };

    case CREATE_BRAND_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case EDIT_BRAND_SUCCESS:
      return {
        ...state,
        data: state.data.map((brand) =>
          brand.id === action.payload.id
            ? { ...brand, ...action.payload.data }
            : brand
        ),
      };

    case DELETE_BRAND_SUCCESS:
      return {
        ...state,
        data: state.data.filter((brand) => brand.id !== action.payload),
      };

    case FETCH_BRANDS_FAILURE:
    case FETCH_BRAND_FAILURE:
    case CREATE_BRAND_FAILURE:
    case EDIT_BRAND_FAILURE:
    case DELETE_BRAND_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default brandReducer;
