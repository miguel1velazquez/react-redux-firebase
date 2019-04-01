import {
  FETCH_WORKSPACES_ASYNC
} from "./reducers/fetchWorkspaces";

/**
 * @constant
 * @type {String}
 * @description Prefix for all actions within library
 * @example
 * import { constants } from 'react-redux-flowjo'
 * constants.actionsPrefix === '@@reactReduxFlowJo' // true
 */
export const actionsPrefix = '@@reactReduxFlowJo'

/**
 * @constant
 * @type {Object}
 * @description Object containing all action types
 * @property {String} START - `@@reactReduxFlowJo/START`
 * @example
 * import { actionTypes } from 'react-redux-flowjo'
 * actionTypes.SET === '@@reactReduxFlowJo/SET' // true
 */
export const actionTypes = {
  FETCH_WORKSPACES_ASYNC: FETCH_WORKSPACES_ASYNC,
}

export default {
  actionTypes
}