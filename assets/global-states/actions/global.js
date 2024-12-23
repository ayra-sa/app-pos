export function SetStatusPageReducer() {
  return (dispatch, getState) => {
    dispatch({
      type: 'STATUS_PAGE_REDUCER_SET',
      payload: {
        isAuthenticated: true,
        token: 'token',
        email: 'email@gmail.com',
        role: 'admin',
      }
    })
  }
}

export function ActLogout() {
  return (dispatch, getState) => {
    dispatch({
      type: 'PAYLOAD_VERIFY_OTP_LOGIN_RESET',
    })
    dispatch({
      type: 'RESPON_VERIFY_OTP_LOGIN_RESET',
    })
    dispatch({
      type: 'PAYLOAD_LOGIN_RESET',
    })
    dispatch({
      type: 'RESPON_LOGIN_RESET',
    })
  }
}

export const setAuthCode = (authCode) => {
  return {
    type: 'RESPON_LOGIN',
    payload: authCode,
  };
};