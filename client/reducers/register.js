import ActionTypes from '../constants/action_types.js';

function register (state=[], action) {
  switch (action.type) {
    case ActionTypes.AddToUsersRequestedAction: {
      console.log(ActionTypes.AddToUsersRequestedAction);
      return Object.assign({}, state, {
        inProgress: true,
        error: "",
        success: "",
      });
    }
    case ActionTypes.AddToUsersRejectedAction: {
      console.log(ActionTypes.AddToUsersRejectedAction);
      return Object.assign({}, state, {
        inProgress: false,
        error: "error in add to users requested action",
        success: "",
      });
    }
    case ActionTypes.AddToUsersFulfilled: {
        console.log(ActionTypes.AddToUsersFulfilled);
        return Object.assign({}, state, {
          inProgress: false,
          error: "new user added",
          success: "",
        });
    }
    default:
      return state;
  }
}
export default register;
