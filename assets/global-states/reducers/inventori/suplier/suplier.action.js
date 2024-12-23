import axiosInstance from "global-states/api";

export const getSuppliers = (dispatch, page) => {
  dispatch({ type: "IS_LOADING", data: true });

  axiosInstance
    .get(`/suppliers?page=${page.toString()}`)
    .then((res) => {
      const { data } = res.data;

      dispatch({ type: "GET_SUPPLIERS", data: Object.values(data) });
      dispatch({ type: "GET_TOTAL_PAGINATION", data: res.data.meta.last_page });
      dispatch({ type: "GET_ALL_SUPPLIERS", data: Object.values(data) });
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      dispatch({ type: "IS_LOADING", data: false });
      dispatch({ type: "IS_LOADING_ACTION", data: false });
    });
};

export const createSupplier = (
  dispatch,
  nameInputCourier,
  emailInputCourier,
  phoneInputCourier,
  cityInputCourier,
  countryInputCourier,
  addressInputCourier,
  page
) => {
  dispatch({ type: "IS_LOADING_ACTION", data: true });

  axiosInstance
    .post("/suppliers", {
      name: nameInputCourier,
      email: emailInputCourier,
      phone: phoneInputCourier,
      country: countryInputCourier,
      city: cityInputCourier,
      address: addressInputCourier,
    })
    .then((res) => {
      getSuppliers(dispatch, page);
      dispatch({ type: "IS_LOADING", data: false });
      dispatch({
        type: "IS_MODAL_UP_SUCCESS_CONFIRMATION",
        data: {
          isUp: true,
          title: "Supplier berhasil dibuat",
        },
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: "IS_LOADING_ACTION", data: false });
      dispatch({
        type: "IS_MODAL_UP_FAILED_CONFIRMATION",
        data: {
          isUp: true,
          title: "Gagal menambahkan supplier",
        },
      });
    });
};

export const editSupplier = (
  dispatch,
  nameInputCourier,
  emailInputCourier,
  phoneInputCourier,
  cityInputCourier,
  countryInputCourier,
  addressInputCourier,
  id,
  page
) => {
  dispatch({ type: "IS_LOADING_ACTION", data: true });

  axiosInstance
    .put(`/suppliers/${id}`, {
      name: nameInputCourier,
      email: emailInputCourier,
      phone: phoneInputCourier,
      country: countryInputCourier,
      city: cityInputCourier,
      address: addressInputCourier,
    })
    .then((res) => {
      getSuppliers(dispatch, page);
      dispatch({ type: "IS_LOADING", data: false });
      dispatch({
        type: "IS_MODAL_UP_SUCCESS_CONFIRMATION",
        data: {
          isUp: true,
          title: "Supplier berhasil diedit",
        },
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: "IS_LOADING_ACTION", data: false });
      dispatch({
        type: "IS_MODAL_UP_FAILED_CONFIRMATION",
        data: {
          isUp: true,
          title: "Gagal mengedit supplier",
        },
      });
    });
};

export const deleteSupplier = (dispatch, id, page) => {
  dispatch({ type: "IS_LOADING_ACTION", data: true });

  axiosInstance
    .delete(`/suppliers/${id}`)
    .then((res) => {
      getSuppliers(dispatch, page);
      dispatch({ type: "IS_LOADING", data: false });
      dispatch({
        type: "IS_MODAL_UP_SUCCESS_CONFIRMATION",
        data: {
          isUp: true,
          title: `Supplier dengan id #${id} berhasil dihapus`,
        },
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: "IS_LOADING_ACTION", data: false });
      dispatch({
        type: "IS_MODAL_UP_FAILED_CONFIRMATION",
        data: {
          isUp: true,
          title: "Gagal menghapus supplier",
        },
      });
    });
};
