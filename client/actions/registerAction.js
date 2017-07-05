import axios from 'axios';
export function userRegisterRequest(userData) {
  return dispatch => {
    console.log("the error is from register Action");
    return axios.post('/api/user', userData);
  }
}
