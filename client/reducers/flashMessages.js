import ActionTypes from '../constants/action_types.js';
import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

export default (state = [], action = {}) => {
  console.log(JSON.stringify(ActionTypes));
  switch (action.type) {
    case ActionTypes.AddFlashMessage:
        return [
          ...state,
          {
            id: shortid.generate(),
            type: action.message.type,
            text: action.message.text,
          }
        ];
    case ActionTypes.DeleteFlashMessage:
      const index = findIndex(state, {id: action.id});
      if (index >= 0) {
         return [
           ...state.slice(0, index),
           ...state.slice(index+1)
         ];
         return state;
      }

    default:
        return state;
  }
}
