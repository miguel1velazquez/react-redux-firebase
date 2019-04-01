import { takeLatest, call, put } from 'redux-saga/effects'
import Axios from 'axios'

import { createAsyncTypes } from '../utils/sagas'
import FLOWJOAPI from '../FlowJoAPI'
import { toHTTPLocalHost } from '../utils/http'
import { getTempFolder } from '../utils/system'

/// ////////////////////////////////////////////////////////////////////////////
export const MERGE_PARAMETERS_FILE_ASYNC = createAsyncTypes(
  'MERGE_PARAMETERS_FILE_ASYNC'
)
/// ////////////////////////////////////////////////////////////////////////////

export const mergeParametersFile = (
  workspaceID,
  sampleID,
  populationID,
  filePath
) => async dispatch => {
  return dispatch({
    type: MERGE_PARAMETERS_FILE_ASYNC.PENDING,
    payload: {
      workspaceID,
      sampleID,
      populationID,
      filePath
    }
  })
}

/// ////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////
export const watchMergeParametersFile = () => {
  return takeLatest(
    MERGE_PARAMETERS_FILE_ASYNC.PENDING,
    mergeParametersFileAsync
  )
}

/// ////////////////////////////////////////////////////////////////////////////
const postMergeParametersFile = async (
  workspaceid,
  sampleid,
  populationid,
  filepath
) => {
  const port = 4567

  return Axios.post(toHTTPLocalHost(port, FLOWJOAPI.PARAMETERS.IMPORT), {
    workspaceid,
    sampleid,
    populationid,
    filepath
  })
}

/// ////////////////////////////////////////////////////////////////////////////

export function* mergeParametersFileAsync({ payload }) {
  try {
    const port = 4567
    const filepath = yield call(getTempFolder)
    const { workspaceID, sampleID, populationID } = payload
    const response = yield call(
      postMergeParametersFile,
      port,
      workspaceID,
      sampleID,
      populationID,
      filepath
    )

    // eslint-disable-next-line no-console
    console.log(response)
  } catch (e) {
    yield put({
      type: MERGE_PARAMETERS_FILE_ASYNC.ERROR,
      payload: e.message
    })
  }
}
/// ////////////////////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////

const initialState = {
  mergeParametersFile: null,
  mergingParametersFile: false,
  mergingParametersFileError: null
}
/// ////////////////////////////////////////////////////////////////////////////

const mergedParametersFile = (state = initialState, action) => {
  switch (action.type) {
    case MERGE_PARAMETERS_FILE_ASYNC.PENDING:
      return {
        ...state,
        fetchingWorkspaces: true
      }
    case MERGE_PARAMETERS_FILE_ASYNC.SUCCESS:
      return {
        ...state,
        mergeParametersFile: action.payload,
        fetchingWorkspaces: false
      }
    case MERGE_PARAMETERS_FILE_ASYNC.ERROR:
      return {
        ...state,
        fetchingWorkspaces: false,
        mergingParametersFileError: action.payload
      }

    default:
      return state
  }
}

export default mergedParametersFile
/// ////////////////////////////////////////////////////////////////////////////
