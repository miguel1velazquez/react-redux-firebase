import {
    watchFetchWorkspaces
} from "./reducers/fetchWorkspaces";


export default function* () {
    yield all([
        watchFetchWorkspaces
    ]);
}