export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const SET_SELECTED_STATE = 'SET_SELECTED_STATE';

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    summary: data.summary, 
    states: data.regional.map(region => ({
      state: region.loc,
      active: region.confirmedCasesIndian - region.discharged - region.deaths, 
      recovered: region.discharged, 
      deaths: region.deaths,
    })),
  },
});

export const setSelectedState = (state) => ({
  type: SET_SELECTED_STATE,
  payload: state,
});

export const fetchCovidData = () => {
  return async (dispatch) => {
    const response = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
    const data = await response.json();
    dispatch(fetchDataSuccess(data.data));
  };
};
