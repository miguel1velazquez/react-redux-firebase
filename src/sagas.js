import { takeLatest, all } from 'redux-saga/effects'
import {
  FETCH_WORKSPACES_ASYNC,
  fetchWorkspacesAsync
} from './reducers/fetchWorkspaces'
import { FETCH_SAMPLES_ASYNC, fetchSamplesAsync } from './reducers/fetchSamples'
import {
  fetchParametersAsync,
  FETCH_PARAMETERS_ASYNC
} from './reducers/fetchParameters'
import {
  fetchParameterSetsAsync,
  FETCH_PARAMETER_SETS_ASYNC
} from './reducers/fetchParameterSets'
import {
  FETCH_POPULATIONS_ASYNC,
  fetchPopulationsAsync
} from './reducers/fetchPopulations'
import {
  FETCH_PARAMETERS_FILE_ASYNC,
  fetchSelectedParametersFileAsync
} from './reducers/fetchParametersFile'
import {
  FETCH_LABELED_PARAMETERS_FILE_ASYNC,
  fetchLabeledParametersFileAsync
} from './reducers/fetchLabeledParametersFile'

export default function*() {
  yield all([
    takeLatest(FETCH_WORKSPACES_ASYNC.PENDING, fetchWorkspacesAsync),
    takeLatest(FETCH_SAMPLES_ASYNC.PENDING, fetchSamplesAsync),
    takeLatest(FETCH_POPULATIONS_ASYNC.PENDING, fetchPopulationsAsync),
    takeLatest(FETCH_PARAMETERS_ASYNC.PENDING, fetchParametersAsync),
    takeLatest(FETCH_PARAMETER_SETS_ASYNC.PENDING, fetchParameterSetsAsync),
    takeLatest(
      FETCH_PARAMETERS_FILE_ASYNC.PENDING,
      fetchSelectedParametersFileAsync
    ),
    takeLatest(
      FETCH_LABELED_PARAMETERS_FILE_ASYNC.PENDING,
      fetchLabeledParametersFileAsync
    )
  ])
}
