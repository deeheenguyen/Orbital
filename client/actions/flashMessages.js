import ActionTypes from '../constants/action_types.js';

export function addFlashMessage(message){
  return {
    type: ActionTypes.AddFlashMessage,
    message
  }
}
export function deleteFlashMessage(id) {
  return {
    type: ActionTypes.DeleteFlashMessage,
    id
  }
}
