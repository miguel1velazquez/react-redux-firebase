import { takeLatest, call, put } from 'redux-saga/effects'
import Axios from 'axios'

import { createAsyncTypes } from '../utils/sagas'

import FLOWJOAPI from '../FlowJoAPI'

import { toHTTPLocalHost } from '../utils/http'
import { getTempFolder } from '../utils/system'

/// ////////////////////////////////////////////////////////////////////////////
export const FETCH_LABELED_PARAMETERS_FILE_ASYNC = createAsyncTypes(
  'FETCH_LABELED_PARAMETERS_FILE_ASYNC'
)
/// ////////////////////////////////////////////////////////////////////////////

export const fetchLabeledParametersFile = (
  workspaceID,
  sampleID,
  populationIDs,
  parameterIDs
) => async dispatch => {
  return dispatch({
    type: FETCH_LABELED_PARAMETERS_FILE_ASYNC.PENDING,
    payload: {
      workspaceID,
      sampleID,
      populationIDs,
      parameterIDs
    }
  })
}
/// ////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////
export const watchFetchLabeledParametersFile = () => {
  return takeLatest(
    FETCH_LABELED_PARAMETERS_FILE_ASYNC.PENDING,
    fetchLabeledParametersFileAsync
  )
}

/// ////////////////////////////////////////////////////////////////////////////

const postLabeledParametersFile = (
  port,
  workspaceid,
  sampleid,
  populationids,
  parameterids,
  filepath,
  zipfile
) => {
  return Axios.post(toHTTPLocalHost(port, FLOWJOAPI.POPULATIONS.EXPORT), {
    workspaceid,
    sampleid,
    populationids,
    parameterids,
    filepath,
    zipfile
  })
}

/// ////////////////////////////////////////////////////////////////////////////

export function* fetchLabeledParametersFileAsync({ payload }) {
  try {
    const port = 4567
    const { workspaceID, sampleID, populationIDs, parameterIDs } = payload
    const outputFolder = yield call(getTempFolder)
    const zipFile = true
    if (port && workspaceID && sampleID && populationIDs && outputFolder) {
      const response = yield call(
        postLabeledParametersFile,
        port,
        workspaceID,
        sampleID,
        populationIDs,
        parameterIDs,
        outputFolder,
        zipFile
      )
      if (response) {
        if (response.data) {
          yield put({
            type: FETCH_LABELED_PARAMETERS_FILE_ASYNC.SUCCESS,
            payload: response.data
          })
        }
      }
    }
  } catch (e) {
    yield put({
      type: FETCH_LABELED_PARAMETERS_FILE_ASYNC.ERROR
    })
  }
}
/// ////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////

const initialState = {
  labeledParametersFile: null,
  fetchingParametersFile: false,
  fetchingParaemtersFileError: null
}
/// ////////////////////////////////////////////////////////////////////////////

const labeledParametersFile = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LABELED_PARAMETERS_FILE_ASYNC.PENDING:
      return {
        ...state,
        fetchingLabeldParametersFile: true
      }
    case FETCH_LABELED_PARAMETERS_FILE_ASYNC.SUCCESS:
      return {
        ...state,
        labeledParametersFile: action.payload,
        fetchingParametersFile: false
      }
    case FETCH_LABELED_PARAMETERS_FILE_ASYNC.ERROR:
      return {
        ...state,
        fetchingParametersFile: false
      }
    default:
      return state
  }
}

export default labeledParametersFile
/// ////////////////////////////////////////////////////////////////////////////
