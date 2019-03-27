import {
  combineReducers
} from './utils/reducers'
import {
  requestingReducer,
  requestedReducer,
  timestampsReducer,
  errorsReducer
} from './reducers'
import { fetchWorkspaces } from './reducers/fetchWorkspaces';

/**
 * @name FlowJoReducer
 * @description Main reducer for react-redux-flowjo. This function is called
 * automatically by redux every time an action is fired. Based on which action
 * is called and its payload, the reducer will update redux state with relevant
 * changes. `flowjoReducer` is made up of multiple "slice reducers"
 * ([outlined in reducers docs](/docs/recipes/reducers.md)) combined using
 * [`combineReducers`](https://redux.js.org/docs/api/combineReducers.html)
 * following the patterns outlined in
 * [the redux docs](https://redux.js.org/docs/recipes/StructuringReducers.html).
 * @param {Object} state - Current flowjo Redux State (state.flowjo)
 * @param {Object} action - Action which will modify state
 * @param {String} action.type - Type of Action being called
 * @param  {String} action.path - Path of action that was dispatched
 * @param {String} action.data - Data associated with action
 * @return {Object} flowjo redux state
 */
export default combineReducers({
  workspaces: fetchWorkspaces
})