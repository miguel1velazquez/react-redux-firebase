import { takeLatest, call, put } from 'redux-saga/effects'
import Axios from 'axios'

import { createAsyncTypes } from '../utils/sagas'
import FLOWJOAPI from '../FlowJoAPI'
import { toHTTPLocalHost } from '../utils/http'

/// ////////////////////////////////////////////////////////////////////////////
export const FETCH_POPULATIONS_ASYNC = createAsyncTypes(
  'FETCH_POPULATIONS_ASYNC'
)
/// ////////////////////////////////////////////////////////////////////////////

export const fetchPopulations = (workspaceID, sampleID) => async dispatch => {
  return dispatch({
    type: FETCH_POPULATIONS_ASYNC.PENDING,
    payload: {
      workspaceID,
      sampleID
    }
  })
}
/// ////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////
export const watchFetchPopulations = () => {
  return takeLatest(FETCH_POPULATIONS_ASYNC.PENDING, fetchPopulationsAsync)
}

/// ////////////////////////////////////////////////////////////////////////////
// export const getApplicationPort = state => state.flowjo.port;

const getPopulations = (port, workspaceID, sampleID) => {
  return Axios.get(toHTTPLocalHost(port, FLOWJOAPI.POPULATIONS.ALL), {
    params: {
      workspaceid: workspaceID,
      sampleid: sampleID
    }
  })
}

/// ////////////////////////////////////////////////////////////////////////////

export function* fetchPopulationsAsync({ payload }) {
  try {
    // const port = yield select(getApplicationPort)
    const port = 4567
    // const workspaceID = yield select(getSelectedWorkspaceID)
    // const selectedSample = yield select(getSelectedSample)
    const { workspaceID, sampleID } = payload
    if (port && workspaceID && sampleID) {
      const populations = yield call(
        getPopulations,
        port,
        workspaceID,
        sampleID
      )
      if (populations) {
        yield put({
          type: FETCH_POPULATIONS_ASYNC.SUCCESS,
          payload: populations.data
        })
      }
    }
  } catch (e) {
    yield put({
      type: FETCH_POPULATIONS_ASYNC.ERROR
    })
  }
}
/// ////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////

const initialState = {
  populations: null,
  fetchingPopulations: false
}
/// ////////////////////////////////////////////////////////////////////////////

const populations = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULATIONS_ASYNC.PENDING:
      return {
        ...state,
        fetchingPopulations: true
      }
    case FETCH_POPULATIONS_ASYNC.SUCCESS:
      return {
        ...state,
        populations: action.payload,
        fetchingPopulations: false
      }
    case FETCH_POPULATIONS_ASYNC.ERROR:
      return {
        ...state,
        fetchingPopulations: false
      }

    default:
      return state
  }
}

export default populations
/// ////////////////////////////////////////////////////////////////////////////
