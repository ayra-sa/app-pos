const initialState = {
  journals: [],
  detail: null,
  detailJournal: [],
  loading: false,
  meta: {},
  links: {},
  error: null,
  success: false
};

const journalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOURNALS_REQUEST':
    case 'FETCH_JOURNAL_REQUEST':
    case 'CREATE_JOURNAL_REQUEST':
    case 'UPDATE_JOURNAL_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_JOURNALS_SUCCESS':
      return {
        ...state,
        loading: false,
        journals: action.payload.journals,
        meta: action.payload.meta,
        links: action.payload.links,
      };
    case 'FETCH_JOURNAL_SUCCESS':
      return {
        ...state,
        loading: false,
        detail: action.payload.detail,
        detailJournal: action.payload.dataDetailJournal,
      };
    case 'CREATE_JOURNAL_SUCCESS':
      return {
        ...state,
        loading: false,
        journals: [...state.journals, action.payload.data],
        success: true
      };
    case 'UPDATE_JOURNAL_SUCCESS':
      return {
        ...state,
        loading: false,
        journals: state.journals.map((unit) =>
          unit.id === action.payload.id ? action.payload : unit
        ),
      };
    case 'FETCH_JOURNALS_FAIL':
    case 'FETCH_JOURNAL_FAIL':
    case 'CREATE_JOURNAL_FAIL':
    case 'UPDATE_JOURNAL_FAIL':
    case 'DELETE_JOURNAL_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'RESET_SUCCESS':
      return {
        ...state,
        success: false
      }
    default:
      return state;
  }
};

export default journalReducer;
