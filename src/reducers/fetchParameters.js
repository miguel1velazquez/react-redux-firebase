import { takeLatest, call, put } from 'redux-saga/effects'
import Axios from 'axios'

import { createAsyncTypes } from '../utils/sagas'
import FLOWJOAPI from '../FlowJoAPI'
import { toHTTPLocalHost } from '../utils/http'

/// ////////////////////////////////////////////////////////////////////////////
export const FETCH_PARAMETERS_ASYNC = createAsyncTypes('FETCH_PARAMETERS_ASYNC')
/// ////////////////////////////////////////////////////////////////////////////

export const fetchParameters = (workspaceID, sampleID) => async dispatch => {
  return dispatch({
    type: FETCH_PARAMETERS_ASYNC.PENDING,
    payload: {
      workspaceID,
      sampleID
    }
  })
}
/// ////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////
export const watchFetchParameters = () => {
  return takeLatest(FETCH_PARAMETERS_ASYNC.PENDING, fetchParametersAsync)
}

/// ////////////////////////////////////////////////////////////////////////////
// export const getApplicationPort = state => state.flowjo.port;

const getParameters = (port, workspaceID, sampleID) => {
  return Axios.get(toHTTPLocalHost(port, FLOWJOAPI.PARAMETERS.ALL), {
    params: {
      workspaceid: workspaceID,
      sampleid: sampleID
    }
  })
}

/// ////////////////////////////////////////////////////////////////////////////

export function* fetchParametersAsync({ payload }) {
  try {
    // const port = yield select(getApplicationPort)
    // const workspaceID = yield select(getSelectedWorkspaceID)
    // const sampleID = yield select(getSelectedSample)
    const port = 4567
    const { workspaceID, sampleID } = payload
    if (port && workspaceID && sampleID) {
      const parameters = yield call(getParameters, port, workspaceID, sampleID)
      if (parameters) {
        yield put({
          type: FETCH_PARAMETERS_ASYNC.SUCCESS,
          payload: parameters.data
        })
      }
    }
  } catch (e) {
    yield put({
      type: FETCH_PARAMETERS_ASYNC.ERROR
    })
  }
}
/// ////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////

const initialState = {
  parameters: null,
  fetchingParameters: false
}
/// ////////////////////////////////////////////////////////////////////////////

const parameters = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARAMETERS_ASYNC.PENDING:
      return {
        ...state,
        fetchingParameters: true
      }
    case FETCH_PARAMETERS_ASYNC.SUCCESS:
      return {
        ...state,
        parameters: action.payload,
        fetchingParameters: false
      }
    case FETCH_PARAMETERS_ASYNC.ERROR:
      return {
        ...state,
        fetchingParameters: false
      }
    default:
      return state
  }
}

export default parameters
/// ////////////////////////////////////////////////////////////////////////////
