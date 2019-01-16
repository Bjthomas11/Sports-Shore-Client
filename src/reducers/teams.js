import {
  FETCH_TEAMS_DATA_SUCCESS,
  FETCH_TEAMS_DATA_ERROR
} from "../actions/teams";

const initialState = {
  teams: [],
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_TEAMS_DATA_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: null
    });
  } else if (action.type === FETCH_TEAMS_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
