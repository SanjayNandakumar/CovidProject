import { FETCH_DATA_SUCCESS, SET_SELECTED_STATE } from './Action';

const initialState = {
  summary: {
    total: 0,
    active: 0,
    recovered: 0,
    deaths: 0,
  },
  states: [], 
  selectedState: null, 
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        summary: action.payload.summary, 
        states: action.payload.states, 
      };
    case SET_SELECTED_STATE:
      return {
        ...state,
        selectedState: action.payload, 
      };
    default:
      return state;
  }
};

export default covidReducer;
