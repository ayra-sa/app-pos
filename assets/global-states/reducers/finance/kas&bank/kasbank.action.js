import axiosInstance from "global-states/api";
import moment from "moment";

export const getEstimatedDatas = (dispatch, page = 1) => {
  dispatch({ type: "IS_LOADING", data: true });

  axiosInstance
    .get(`/estimated-account?page=${page}`)
    .then((res) => {
      const { data } = res.data;

      dispatch({ type: "GET_ESTIMATED_DATAS", data: Object.values(data) });
      dispatch({ type: "GET_TOTAL_PAGINATION", data: res.data.meta.last_page });
      dispatch({ type: "GET_ALL_ESTIMATED_DATAS", data: Object.values(data) });
    })
    .catch((e) => console.log(e))
    .finally(() => {
      dispatch({ type: "IS_LOADING", data: false });
      dispatch({ type: "IS_LOADING_ACTION", data: false });
    });
};

export const getEstimatedDatasByType = (dispatch, type) => {
  dispatch({ type: "IS_LOADING", data: true });

  axiosInstance
    .get(`/estimated-account-options`, {
      acc_type: [type],
    })
    .then((res) => {
      const { data } = res.data;

      dispatch({ type: "GET_ESTIMATED_DATAS", data: Object.values(data) });
    })
    .catch((e) => console.log(e))
    .finally(() => {
      dispatch({ type: "IS_LOADING", data: false });
      dispatch({ type: "IS_LOADING_ACTION", data: false });
    });
};

export const createEstimatedDatas = (dispatch, page) => {
  dispatch({ type: "IS_LOADING_ACTION", data: true });

  axiosInstance
    .post("/generate-estimated-account")
    .then((res) => {
      getEstimatedDatas(dispatch, page);
      dispatch({
        type: "IS_MODAL_UP_SUCCESS_CONFIRMATION",
        data: {
          isUp: true,
          title: "Akun perkiraan berhasil dibuat",
        },
      });
      dispatch({ type: "IS_LOADING", data: false });
    })
    .catch((e) => console.log(e));
};

export const getTypeAkun = (dispatch) => {
  dispatch({ type: "IS_LOADING_ACTION", data: true });

  axiosInstance
    .get("/get-account-types")
    .then((res) => {
      const { data } = res.data;
      dispatch({ type: "GET_TYPE_AKUN", data: data });
    })
    .catch((e) => console.log(e));
};

export const addAccountKasBank = (dispatch, input, page) => {
  dispatch({ type: "IS_LOADING_ACTION", data: true });

  axiosInstance
    .post("/estimated-account", {
      number: input.kodePerkiraan,
      name: input.namaAkun,
      account_type_id: input.typeAkun,
      period_date: moment(input.tanggal).format("YYYY-MM-DD"),
      parent_account: input.subAkun,
      currency_id: 1,
      start_balance: input.balance,
      memo: input.memo,
    })
    .then((res) => {
      getEstimatedDatas(dispatch, page);
      dispatch({
        type: "IS_MODAL_UP_SUCCESS_CONFIRMATION",
        data: {
          isUp: true,
          title: "Akun berhasil dibuat",
        },
      });
      dispatch({ type: "IS_LOADING", data: false });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: "IS_LOADING_ACTION", data: false });
      dispatch({
        type: "IS_MODAL_UP_FAILED_CONFIRMATION",
        data: {
          isUp: true,
          title: "Gagal menambahkan akun",
          desc: e?.response?.data?.message,
        },
      });
    });
};

export const editAccountKasBank = (dispatch, input, number, page) => {
  dispatch({ type: "IS_LOADING_ACTION", data: true });

  axiosInstance
    .put(`/estimated-account/${number}`, {
      number: input.kodePerkiraan,
      name: input.namaAkun,
      account_type_id: input.typeAkun,
      period_date: moment(input.tanggal).format("YYYY-MM-DD"),
      parent_account: input.subAkun,
      currency_id: 1,
      start_balance: input.balance,
      memo: input.memo,
    })
    .then((res) => {
      getEstimatedDatas(dispatch, page);
      dispatch({
        type: "IS_MODAL_UP_SUCCESS_CONFIRMATION",
        data: {
          isUp: true,
          title: "Akun berhasil diedit",
        },
      });
      dispatch({ type: "IS_LOADING", data: false });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: "IS_LOADING_ACTION", data: false });
      dispatch({
        type: "IS_MODAL_UP_FAILED_CONFIRMATION",
        data: {
          isUp: true,
          title: "Gagal mengedit akun",
          desc: e?.response?.data?.message,
        },
      });
    });
};
