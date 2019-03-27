import {
  takeLatest,
  call,
  put,
  select
} from 'redux-saga/effects';
import _ from 'lodash'
import {
  createAsyncTypes
} from '../utils/sagas'
///////////////////////////////////////////////////////////////////////////////
export const FETCH_WORKSPACES_ASYNC = createAsyncTypes('FETCH_WORKSPACES_ASYNC')
///////////////////////////////////////////////////////////////////////////////

export const fetchWorkspaces = () => async dispatch => {
  return dispatch({
    type: FETCH_WORKSPACES_ASYNC.PENDING
  })
}
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
export function* watchFetchWorkspaces() {
  yield takeLatest(FETCH_WORKSPACES_ASYNC.PENDING, fetchWorkspacesAsync);
}

///////////////////////////////////////////////////////////////////////////////
export const getApplicationPort = state => state.flowjo.port;
const fetchWorkspaces = port => {
  return Axios.get(toHTTPLocalHost(port, SEQGEQAPI.WORKSPACES.ALL));
};

///////////////////////////////////////////////////////////////////////////////

function* fetchWorkspacesAsync() {
  try {
    console.log('Fetch workspaces');
    const port = yield select(getApplicationPort);
    const workspaces = yield call(fetchWorkspaces, port);
    console.log(workspaces);
    if (workspaces.data) {
      yield put({
        type: FETCH_WORKSPACES_ASYNC.SUCCESS,
        payload: workspaces.data
      });
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: FETCH_PARAMETERS_ASYNC.ERROR
    });
  }
}
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const initialState = {
  workspaces: null,
  fetchingWorkspaces: false
}
///////////////////////////////////////////////////////////////////////////////

export default (workspaces = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORKSPACES_ASYNC.PENDING:
      return {
        ...state,
        fetchingWorkspaces: true
      }
    case FETCH_WORKSPACES_ASYNC.SUCCESS:
      return {
        ...state,
        workspaces: action.payload,
        fetchingWorkspaces: false
      }
    case FETCH_WORKSPACES_ASYNC.ERROR:
      return {
        ...state,
        fetchingWorkspaces: false
      }

    default:
      return state
  }
})
///////////////////////////////////////////////////////////////////////////////