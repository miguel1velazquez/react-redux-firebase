import { takeLatest, call, put } from 'redux-saga/effects'
import Axios from 'axios'
import { createAsyncTypes } from '../utils/sagas'
import FLOWJOAPI from '../FlowJoAPI'
import { toHTTPLocalHost } from '../utils/http'

/// ////////////////////////////////////////////////////////////////////////////
export const FETCH_SAMPLES_ASYNC = createAsyncTypes('FETCH_SAMPLES_ASYNC')
/// ////////////////////////////////////////////////////////////////////////////

export const fetchSamples = workspaceID => async dispatch => {
  return dispatch({
    type: FETCH_SAMPLES_ASYNC.PENDING,
    payload: workspaceID
  })
}
/// ////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////
export const watchFetchSamples = () => {
  return takeLatest(FETCH_SAMPLES_ASYNC.PENDING, fetchSamplesAsync)
}

/// ////////////////////////////////////////////////////////////////////////////
// export const getApplicationPort = state => state.flowjo.port;

const getSamples = (port, workspaceID) => {
  return Axios.get(toHTTPLocalHost(port, FLOWJOAPI.SAMPLES.ALL), {
    params: {
      workspaceid: workspaceID
    }
  })
}
/// ////////////////////////////////////////////////////////////////////////////

export function* fetchSamplesAsync({ payload }) {
  try {
    // const port = yield select(getApplicationPort)
    const port = 4567
    // const workspaceID = yield select(getSelectedWorkspaceID)
    const workspaceID = payload
    if (workspaceID && port) {
      const samples = yield call(getSamples, port, workspaceID)
      if (samples) {
        const { data } = samples
        if (data) {
          yield put({
            type: FETCH_SAMPLES_ASYNC.SUCCESS,
            payload: data
          })
        }
      }
    }
  } catch (e) {
    yield put({
      type: FETCH_SAMPLES_ASYNC.ERROR
    })
  }
}

/// ////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////

const initialState = {
  samples: null,
  fetchingSamples: false
}
/// ////////////////////////////////////////////////////////////////////////////

const samples = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SAMPLES_ASYNC.PENDING:
      return {
        ...state,
        fetchingSamples: true
      }
    case FETCH_SAMPLES_ASYNC.SUCCESS:
      return {
        ...state,
        samples: action.payload,
        fetchingSamples: false
      }
    case FETCH_SAMPLES_ASYNC.ERROR:
      return {
        ...state,
        fetchingSamples: false
      }

    default:
      return state
  }
}

export default samples
/// ////////////////////////////////////////////////////////////////////////////
