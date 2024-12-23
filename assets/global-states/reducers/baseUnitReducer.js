const initialState = {
    baseUnits: [],
    meta: {},
    links: {},
    error: null,
    loading: false
  };
  
  const baseUnitReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_BASE_UNITS_REQUEST':
      case 'CREATE_BASE_UNIT_REQUEST':
      case 'UPDATE_BASE_UNIT_REQUEST':
      case 'DELETE_BASE_UNIT_REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'FETCH_BASE_UNITS_SUCCESS':
        return {
          ...state,
          baseUnits: action.payload.data,
          meta: action.payload.meta,
          links: action.payload.links,
          loading: false
        };
      case 'CREATE_BASE_UNIT_SUCCESS':
        return {
          ...state,
          loading: false,
          baseUnits: [...state.baseUnits, action.payload.data],
        };
      case 'UPDATE_BASE_UNIT_SUCCESS':
        return {
          ...state,
          loading: false,
          baseUnits: state.baseUnits.map((unit) =>
            unit.id === action.payload.id ? action.payload : unit
          ),
        };
      case 'DELETE_BASE_UNIT_SUCCESS':
        return {
          ...state,
          loading: false,
          baseUnits: state.baseUnits.filter((unit) => unit.id !== action.payload),
        };
      case 'FETCH_BASE_UNITS_FAIL':
      case 'CREATE_BASE_UNIT_FAIL':
      case 'UPDATE_BASE_UNIT_FAIL':
      case 'DELETE_BASE_UNIT_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default baseUnitReducer;
  