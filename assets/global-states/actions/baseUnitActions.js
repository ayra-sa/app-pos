import axiosInstance from "global-states/api";

// Fetch base units
export const fetchBaseUnits = (page) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_BASE_UNITS_REQUEST' });

    const response = await axiosInstance.get(`/base-units?page=${page}`);
    const rawData = response.data?.data;
    let data = [];

    if (rawData) {
      if (Array.isArray(rawData)) {
        data = rawData.map((item, id) => ({
          no: id + 1,
          ...item
        }));
      } else {
        data = Object.values(rawData).map((item, id) => ({
          no: id + 1,
          ...item
        }));
      }
    }
    // const data = response.data?.data.map((item, id) => ({
    //   no: id + 1,
    //   id: item.id,
    //   name: item.attributes?.name,
    //   link: item.links?.self,
    // }));

    const meta = response.data?.meta;
    const links = response.data?.links;

    dispatch({
      type: 'FETCH_BASE_UNITS_SUCCESS',
      payload: { data, meta, links },
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_BASE_UNITS_FAIL',
      payload: error.message,
    });
  }
};

// Create base unit
export const createBaseUnit = (data,page) => async (dispatch) => {
  try {
    dispatch({ type: 'CREATE_BASE_UNIT_REQUEST' });

    const response = await axiosInstance.post('/base-units', data);

    if (response.status === 201) {
      dispatch({
        type: 'CREATE_BASE_UNIT_SUCCESS',
        payload: response.data,
      });
      dispatch(fetchBaseUnits(page))
      alert('Data berhasil ditambahkan!');
    }
  } catch (error) {
    dispatch({
      type: 'CREATE_BASE_UNIT_FAIL',
      payload: error.message,
    });
    alert('Gagal menambahkan data!');
  }
};

// Update base unit
export const updateBaseUnit = (id, data, page) => async (dispatch) => {
  try {
    dispatch({ type: 'UPDATE_BASE_UNIT_REQUEST' });

    const response = await axiosInstance.put(`/base-units/${id}`, data);

    dispatch({
      type: 'UPDATE_BASE_UNIT_SUCCESS',
      payload: response.data,
    });
    dispatch(fetchBaseUnits(page))
    alert('Update berhasil');
  } catch (error) {
    dispatch({
      type: 'UPDATE_BASE_UNIT_FAIL',
      payload: error.message,
    });
    alert('Update gagal, silahkan coba lagi');
  }
};

// Delete base unit
export const deleteBaseUnit = (id, page) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_BASE_UNIT_REQUEST' });

    await axiosInstance.delete(`/base-units/${id}`);
    dispatch({
      type: 'DELETE_BASE_UNIT_SUCCESS',
      payload: id,
    });
    dispatch(fetchBaseUnits(page))
    alert('Data berhasil dihapus');
  } catch (error) {
    dispatch({
      type: 'DELETE_BASE_UNIT_FAIL',
      payload: error.message,
    });
    alert('Data gagal dihapus');
  }
};
