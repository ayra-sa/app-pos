import axiosInstance from "global-states/api";

// Fetch journals
export const fetchJournals = (page) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_JOURNALS_REQUEST' });

    const response = await axiosInstance.get(`/journal?page=${page}`);
    const rawData = response.data?.data;
    let journals = [];

    if (rawData) {
      if (Array.isArray(rawData)) {
        journals = rawData.map((item, id) => ({
          no: id + 1,
          ...item
        }));
      } else {
        journals = Object.values(rawData).map((item, id) => ({
          no: id + 1,
          ...item
        }));
      }
    }
    // const journals = response.data?.data.map((item, id) => ({
    //   ...item,
    //   no: id + 1,
    // }));

    const {data, ...meta} = response.data;

    dispatch({
      type: 'FETCH_JOURNALS_SUCCESS',
      payload: { journals, meta },
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_JOURNALS_FAIL',
      payload: error.message,
    });
  }
};

// fetch journal
export const fetchJournalDetail = (id) => async (dispatch) => {
  dispatch({ type: 'FETCH_JOURNAL_REQUEST' });

  try {
    const res = await axiosInstance.get(`/journal/${id}`);
    
    if (res.data && res.data.data) {
      const detail = res.data.data;
      const dataDetailJournal = res.data.data.journal_details?.map((item, id) => ({
        ...item,
        no: id + 1,
      })) || [];

      dispatch({
        type: 'FETCH_JOURNAL_SUCCESS',
        payload: { detail, dataDetailJournal },
      });
    } else {
      dispatch({
        type: 'FETCH_JOURNAL_FAILURE',
        payload: 'Data not found',
      });
    }
  } catch (error) {
    dispatch({
      type: 'FETCH_JOURNAL_FAILURE',
      payload: error?.message || "Error fetching data",
    });
  }
};

// Create journal
export const createJournal = (data) => async (dispatch) => {
  try {
    dispatch({ type: 'CREATE_JOURNAL_REQUEST' });

    const response = await axiosInstance.post('/journal', data);

    dispatch({
      type: 'CREATE_JOURNAL_SUCCESS',
      payload: response.data,
    });
    alert('Data berhasil ditambahkan!');
    // router.push("/finance/laporan/jurnal-umum/");
  } catch (error) {
    dispatch({
      type: 'CREATE_JOURNAL_FAIL',
      payload: error.message,
    });
    alert('Gagal menambahkan data!');
  }
};

// Update journal
export const updateJournal = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: 'UPDATE_JOURNAL_REQUEST' });

    const response = await axiosInstance.put(`/journal/${id}`, data);

    dispatch({
      type: 'UPDATE_JOURNAL_SUCCESS',
      payload: response.data,
    });
    // dispatch(fetchJournals())
    alert('Update berhasil');
  } catch (error) {
    dispatch({
      type: 'UPDATE_JOURNAL_FAIL',
      payload: error.message,
    });
    alert('Update gagal, silahkan coba lagi');
  }
};

export const resetSuccess = () => ({
  type: "RESET_SUCCESS"
})