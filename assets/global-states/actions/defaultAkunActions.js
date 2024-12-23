import axiosInstance from "global-states/api";

export const fetchPreferenceAccounts = () => async (dispatch) => {
    dispatch({ type: 'FETCH_PREFERENCE_ACCOUNTS_REQUEST' });
    try {
      const response = await axiosInstance.get("/preference-accounts");
  
      dispatch({
        type: 'FETCH_PREFERENCE_ACCOUNTS_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_PREFERENCE_ACCOUNTS_FAILURE',
        payload: error.message || "Error fetching data",
      });
    }
  };