import { takeLatest, call, put } from 'redux-saga/effects'
import Axios from 'axios'

import { createAsyncTypes } from '../utils/sagas'
import FLOWJOAPI from '../FlowJoAPI'
import { toHTTPLocalHost } from '../utils/http'

/// ////////////////////////////////////////////////////////////////////////////
export const FETCH_PARAMETER_SETS_ASYNC = createAsyncTypes(
  'FETCH_PARAMETER_SETS_ASYNC'
)
/// ////////////////////////////////////////////////////////////////////////////

export const fetchParameterSets = () => async dispatch => {
  return dispatch({
    type: FETCH_PARAMETER_SETS_ASYNC.PENDING
  })
}
/// ////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////
export const watchFetchParameterSets = () => {
  return takeLatest(FETCH_PARAMETER_SETS_ASYNC.PENDING, fetchParameterSetsAsync)
}

/// ////////////////////////////////////////////////////////////////////////////
// export const getApplicationPort = state => state.flowjo.port;

const getParameterSets = (port, workspaceID, sampleID) => {
  return Axios.get(
    toHTTPLocalHost(port, FLOWJOAPI.PARAMETER_SETS.ALL, {
      params: {
        workspaceid: workspaceID,
        sampleid: sampleID
      }
    })
  )
}

/// ////////////////////////////////////////////////////////////////////////////

export function* fetchParameterSetsAsync(workspaceID, sampleID) {
  try {
    while (true) {
      // const port = yield select(getApplicationPort);
      const port = 4567
      const response = yield call(getParameterSets, port)
      if (response && response.data) {
        yield put({
          type: FETCH_PARAMETER_SETS_ASYNC.SUCCESS,
          payload: response.data
        })
      }
    }
  } catch (e) {
    yield put({
      type: FETCH_PARAMETER_SETS_ASYNC.ERROR,
      payload: e.message
    })
  }
}
/// ////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////

const initialState = {
  parameterSets: null,
  parameterSetsError: null,
  fetchingParameterSets: false
}
/// ////////////////////////////////////////////////////////////////////////////

const parameterSets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARAMETER_SETS_ASYNC.PENDING:
      return {
        ...state,
        fetchingParameterSets: true
      }
    case FETCH_PARAMETER_SETS_ASYNC.SUCCESS:
      return {
        ...state,
        parameterSets: action.payload,
        fetchingParameterSets: false
      }
    case FETCH_PARAMETER_SETS_ASYNC.ERROR:
      return {
        ...state,
        parameterSets: null,
        parameterSetsError: action.payload,
        fetchingParameterSets: false
      }

    default:
      return state
  }
}

export default parameterSets
/// ////////////////////////////////////////////////////////////////////////////
