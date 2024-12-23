import axiosInstance from "global-states/api";
import {
  CREATE_BRAND_FAILURE,
  CREATE_BRAND_REQUEST,
  CREATE_BRAND_SUCCESS,
  DELETE_BRAND_FAILURE,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  EDIT_BRAND_FAILURE,
  EDIT_BRAND_REQUEST,
  EDIT_BRAND_SUCCESS,
  FETCH_BRAND_FAILURE,
  FETCH_BRAND_REQUEST,
  FETCH_BRAND_SUCCESS,
  FETCH_BRANDS_FAILURE,
  FETCH_BRANDS_REQUEST,
  FETCH_BRANDS_SUCCESS,
} from "global-states/types/brandTypes";

// Fetch Brands
export const fetchBrands = (page) => async (dispatch) => {
  dispatch({ type: FETCH_BRANDS_REQUEST });
  try {
    const response = await axiosInstance.get(`/brands?page=${page}`);
    const data = response.data?.data.map((item, id) => ({
      no: id + 1,
      id: item.id,
      name: item.attributes?.name,
      image: item.attributes?.image,
      description: item.attributes?.description,
      productsCount: item.attributes?.products_count,
      link: item.links?.self,
    }));

    const meta = response.data?.meta;
    const links = response.data?.links;

    dispatch({
      type: FETCH_BRANDS_SUCCESS,
      payload: { data, meta, links },
    });
  } catch (error) {
    dispatch({
      type: FETCH_BRANDS_FAILURE,
      payload: error.message || "Error fetching brands",
    });
  }
};

// fetch brand
export const fetchBrandDetail = (id) => async (dispatch) => {
  dispatch({ type: FETCH_BRAND_REQUEST });
  try {
    const res = await axiosInstance.get(`/brands/${id}`);
    dispatch({
      type: FETCH_BRAND_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_BRAND_FAILURE,
      payload: error.message || "Error fetch brand",
    });
  }
};

// Create Brand
export const createBrand = (brandData, page) => async (dispatch) => {
  dispatch({ type: CREATE_BRAND_REQUEST });
  try {
    const response = await axiosInstance.post("/brands", brandData);
    dispatch({
      type: CREATE_BRAND_SUCCESS,
      payload: response.data,
    });
    dispatch(fetchBrands(page))
  } catch (error) {
    dispatch({
      type: CREATE_BRAND_FAILURE,
      payload: error.message || "Error creating brand",
    });
  }
};

// Edit Brand
export const editBrand = (brandId, brandData, page) => async (dispatch) => {
  dispatch({ type: EDIT_BRAND_REQUEST });
  try {
    const response = await axiosInstance.post(`/brands/${brandId}`, brandData);
    dispatch({
      type: EDIT_BRAND_SUCCESS,
      payload: { id: brandId, data: response.data },
    });
    dispatch(fetchBrands(page))
  } catch (error) {
    dispatch({
      type: EDIT_BRAND_FAILURE,
      payload: error.message || "Error editing brand",
    });
  }
};

// Delete Brand
export const deleteBrand = (brandId, page) => async (dispatch) => {
  dispatch({ type: DELETE_BRAND_REQUEST });
  try {
    await axiosInstance.delete(`/brands/${brandId}`);
    dispatch({
      type: DELETE_BRAND_SUCCESS,
      payload: brandId,
    });
    dispatch(fetchBrands(page))
  } catch (error) {
    dispatch({
      type: DELETE_BRAND_FAILURE,
      payload: error.message || "Error deleting brand",
    });
  }
};
