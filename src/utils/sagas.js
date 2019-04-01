import {
  actionsPrefix
} from "../constants";

///////////////////
// ActionHelpers //
///////////////////
const asyncTypes = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

export const createAsyncTypes = typeString =>
  Object.values(asyncTypes).reduce((acc, curr) => {
    acc[curr] = `@@reactReduxFlowJo/${typeString}_${curr}`
    return acc
  }, {})
export const createAction = (type, payload = {}) => ({
  type,
  ...payload
})
///////////////////
// createReducer //
///////////////////
export const createReducer = (initialState, handlers) => (
    state = initialState,
    action
  ) =>
  handlers.hasOwnProperty(action.type) ?
  handlers[action.type](state, action) :
  state