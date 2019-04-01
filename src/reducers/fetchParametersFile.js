import { takeLatest, call, put } from 'redux-saga/effects'
import Axios from 'axios'

import { createAsyncTypes } from '../utils/sagas'

import FLOWJOAPI from '../FlowJoAPI'

import { toHTTPLocalHost } from '../utils/http'
import { getTempFolder } from '../utils/system'

/// ////////////////////////////////////////////////////////////////////////////
export const FETCH_PARAMETERS_FILE_ASYNC = createAsyncTypes(
  'FETCH_PARAMETERS_FILE_ASYNC'
)
/// ////////////////////////////////////////////////////////////////////////////

export const fetchParametersFile = (
  workspaceID,
  sampleID,
  populationID,
  parameterIDs
) => async dispatch => {
  return dispatch({
    type: FETCH_PARAMETERS_FILE_ASYNC.PENDING,
    payload: {
      workspaceID,
      sampleID,
      populationID,
      parameterIDs
    }
  })
}
/// ////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////
export const watchFetchParametersFile = () => {
  return takeLatest(
    FETCH_PARAMETERS_FILE_ASYNC.PENDING,
    fetchSelectedParametersFileAsync
  )
}

/// ////////////////////////////////////////////////////////////////////////////
// export const getApplicationPort = state => state.flowjo.port;

const getSelectedParametersFile = (
  port,
  workspaceid,
  sampleid,
  populationid,
  parameterids,
  filepath
) => {
  return Axios.post(toHTTPLocalHost(port, FLOWJOAPI.PARAMETERS.EXPORT), {
    workspaceid,
    sampleid,
    populationid,
    parameterids,
    filepath
  })
}

/// ////////////////////////////////////////////////////////////////////////////

export function* fetchSelectedParametersFileAsync({ payload }) {
  try {
    // const port = yield select(getApplicationPort);
    const port = 4567

    const { workspaceID, sampleID, populationID, parameterIDs } = payload
    // const workspaceID = yield select(getSelectedWorkspaceID);
    // const selectedSample = yield select(getSelectedSample);
    // const selectedPopulation = yield select(getSelectedPopulation);
    // const selectedParameters = yield select(getSelectedParameters);
    const outputFolder = yield call(getTempFolder)
    if (port && workspaceID && sampleID) {
      const response = yield call(
        getSelectedParametersFile,
        port,
        workspaceID,
        sampleID,
        populationID,
        parameterIDs,
        outputFolder
      )
      if (response) {
        if (response.data) {
          yield put({
            type: FETCH_PARAMETERS_FILE_ASYNC.SUCCESS,
            payload: response.data
          })
        }
      }
    }
  } catch (e) {
    yield put({
      type: FETCH_PARAMETERS_FILE_ASYNC.ERROR
    })
  }
}
/// ////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////

const initialState = {
  parametersFile: null,
  fetchingParametersFile: false
}
/// ////////////////////////////////////////////////////////////////////////////

const parametersFile = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARAMETERS_FILE_ASYNC.PENDING:
      return {
        ...state,
        fetchingParametersFile: true
      }
    case FETCH_PARAMETERS_FILE_ASYNC.SUCCESS:
      return {
        ...state,
        parametersFile: action.payload,
        fetchingParametersFile: false
      }
    case FETCH_PARAMETERS_FILE_ASYNC.ERROR:
      return {
        ...state,
        fetchingParametersFile: false
      }
    default:
      return state
  }
}

export default parametersFile
/// ////////////////////////////////////////////////////////////////////////////
