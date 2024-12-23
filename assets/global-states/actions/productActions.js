import axiosInstance from "global-states/api";

// MAIN PRODUCTS

export const fetchMainProducts = () => async (dispatch) => {
  dispatch({ type: "FETCH_MAIN_PRODUCTS_REQUEST" });
  try {
    const response = await axiosInstance.get("/main-products");
    const data = response.data?.data.map((item, id) => ({
      no: id + 1,
      ...item,
    }));

    // const allProducts = response.data.data.flatMap((item) =>
    //   item.attributes.products.map((product) => ({
    //     ...product,
    //     productId: item.id,
    //   }))
    // );

    dispatch({
      type: "FETCH_MAIN_PRODUCTS_SUCCESS",
      payload: { mainProducts: data },
    });
  } catch (error) {
    dispatch({
      type: "FETCH_MAIN_PRODUCTS_FAILURE",
      payload: error.message || "Error fetching main products",
    });
  }
};

export const createMainProduct =
  (newMainProduct, newImageFile) => async (dispatch) => {
    const formData = new FormData();
    Object.entries(newMainProduct).forEach(([key, value]) => {
      formData.append(key, value);
    });
    //   formData.append('images', newImageFile, `/D:/Downloads/${newImageFile.name}`);
    // formData.append("images", newImageFile);

    dispatch({ type: "CREATE_MAIN_PRODUCT_REQUEST" });
    try {
      const response = await axiosInstance.post("/main-products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        dispatch({ type: "CREATE_MAIN_PRODUCT_SUCCESS" });
        dispatch(fetchMainProducts());
      }
    } catch (error) {
      dispatch({
        type: "CREATE_MAIN_PRODUCT_FAILURE",
        payload: error.message || "Error creating main product",
      });
    }
  };

export const deleteMainProduct = (productId) => async (dispatch) => {
  dispatch({ type: "DELETE_MAIN_PRODUCT_REQUEST" });
  try {
    await axiosInstance.delete(`/products/${productId}`);
    dispatch({ type: "DELETE_MAIN_PRODUCT_SUCCESS" });
    dispatch(fetchMainProducts());
  } catch (error) {
    dispatch({
      type: "DELETE_MAIN_PRODUCT_FAILURE",
      payload: error.message || "Error deleting main product",
    });
  }
};

// INIT PRODUCT ACCOUNTS
export const fetchInitProductAccounts = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_INIT_PRODUCT_ACCOUNT_REQUEST" });

    const response = await axiosInstance.get(`/init-product-accounts`);
    const data = response.data?.data

    dispatch({
      type: "FETCH_INIT_PRODUCT_ACCOUNT_SUCCESS",
      payload: { data },
    });
  } catch (error) {
    dispatch({
      type: "FETCH_INIT_PRODUCT_ACCOUNT_FAIL",
      payload: error.message,
    });
  }
};


// PRODUCTS

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });

    const response = await axiosInstance.get(`/products`);
    const data = response.data?.data

    dispatch({
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: { products: data },
    });
  } catch (error) {
    dispatch({
      type: "FETCH_PRODUCTS_FAIL",
      payload: error.message,
    });
  }
};

export const fetchProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_PRODUCT_REQUEST" });

    const response = await axiosInstance.get(`/products/${id}`);
    const data = response.data?.data

    dispatch({
      type: "FETCH_PRODUCT_SUCCESS",
      payload: { data },
    });
  } catch (error) {
    dispatch({
      type: "FETCH_PRODUCT_FAIL",
      payload: error.message,
    });
  }
};
