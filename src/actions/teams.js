import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const FETCH_TEAMS_DATA_SUCCESS = "FETCH_TEAMS_DATA_SUCCESS";
export const fetchTeamsDataSuccess = data => ({
  type: FETCH_TEAMS_DATA_SUCCESS,
  data
});

export const FETCH_TEAMS_DATA_ERROR = "FETCH_TEAMS_DATA_ERROR";
export const fetchTeamsDataError = error => ({
  type: FETCH_TEAMS_DATA_ERROR,
  error
});

export const fetchTeamsData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const user = getState().auth.currentUser.username;
  console.log(user);
  return fetch(`${API_BASE_URL}/teams/${user}`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ data }) => dispatch(fetchTeamsDataSuccess(data)))
    .catch(err => {
      dispatch(fetchTeamsDataError(err));
    });
};
