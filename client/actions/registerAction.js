import axios from 'axios';
export function userRegisterRequest(userData) {
  return dispatch => {
    console.log("this is data ");
    console.log(JSON.stringify(userData));
    console.log("the error is from register Action");
   return axios.post('/api/users', userData);
  }
}
