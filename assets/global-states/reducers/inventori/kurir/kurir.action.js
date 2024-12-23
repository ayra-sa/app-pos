import axiosInstance from "global-states/api";

export const getCouriers = (dispatch, page) => {
  dispatch({ type: "IS_LOADING", data: true });

  axiosInstance
    .get(`/couriers?page=${page.toString()}`)
    .then((res) => {
      const { data } = res.data;

      dispatch({ type: "GET_COURIERS", data: Object.values(data) });
      dispatch({ type: "GET_TOTAL_PAGINATION", data: res.data.meta.last_page });
      dispatch({ type: "GET_ALL_COURIERS", data: Object.values(data) });
    })
    .catch((e) => console.log(e))
    .finally(() => {
      dispatch({ type: "IS_LOADING", data: false });
      dispatch({ type: "IS_LOADING_ACTION", data: false });
    });
};

export const createCourier = (
  dispatch,
  nameInputCourier,
  emailInputCourier,
  phoneInputCourier,
  page
) => {
  dispatch({ type: "IS_LOADING_ACTION", data: true });

  axiosInstance
    .post("/couriers", {
      name: nameInputCourier,
      email: emailInputCourier,
      phone: phoneInputCourier,
    })
    .then((res) => {
      getCouriers(dispatch, page);
      dispatch({
        type: "IS_MODAL_UP_SUCCESS_CONFIRMATION",
        data: {
          isUp: true,
          title: "Kurir berhasil dibuat",
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
          title: "Gagal menambahkan kurir",
        },
      });
    });
};

export const editCourier = (
  dispatch,
  nameInputCourier,
  emailInputCourier,
  phoneInputCourier,
  id,
  page
) => {
  dispatch({ type: "IS_LOADING_ACTION", data: true });

  axiosInstance
    .put(`/couriers/${id}`, {
      name: nameInputCourier,
      email: emailInputCourier,
      phone: phoneInputCourier,
    })
    .then((res) => {
      getCouriers(dispatch, page);
      dispatch({
        type: "IS_MODAL_UP_SUCCESS_CONFIRMATION",
        data: {
          isUp: true,
          title: "Kurir berhasil diedit",
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
          title: "Gagal mengedit kurir",
        },
      });
    });
};

export const deleteCourier = (dispatch, id, page) => {
  dispatch({ type: "IS_LOADING_ACTION", data: true });

  axiosInstance
    .delete(`/couriers/${id}`)
    .then((res) => {
      getCouriers(dispatch, page);
      dispatch({
        type: "IS_MODAL_UP_SUCCESS_CONFIRMATION",
        data: {
          isUp: true,
          title: `Kurir dengan id #${id} berhasil dihapus`,
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
          title: "Gagal menghapus kurir",
        },
      });
    });
};
