import ActionTypes from '../constants/action_types.js';

function login(state=[], action) {
  switch (action.type) {
    case ActionTypes.GetUsersRejected:
      console.log(ActionTypes.GetUsersRejected);
      return Object.assign({}, state, {
        inProgress: true,
        error: "",
        success: "",
      });
    case ActionTypes.GetUsersRequested:
      console.log(ActionTypes.GetUsersRequested);
      return Object.assign({}, state, {
        inProgress: false,
        error: "error in add to users requested action",
        success: "",
      });
    case ActionTypes.GetUsersFulfilled:
        console.log(ActionTypes.GetUsersFulfilled);
        return Object.assign({}, state, {
          inProgress: false,
          error: "got user",
          success: "",
        });
    default:
      return state;
  }
}

export default login;
