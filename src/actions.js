import { fetchWorkspaces } from './reducers/fetchWorkspaces'
import { fetchSamples } from './reducers/fetchSamples'
import { fetchPopulations } from './reducers/fetchPopulations'
import { fetchParameters } from './reducers/fetchParameters'
import { fetchParameterSets } from './reducers/fetchParameterSets'
import { fetchParametersFile } from './reducers/fetchParametersFile'
import { fetchLabeledParametersFile } from './reducers/fetchLabeledParametersFile';

const flowjoActions = {
  fetchWorkspaces,
  fetchSamples,
  fetchPopulations,
  fetchParameters,
  fetchParameterSets,
  fetchParametersFile,
  fetchLabeledParametersFile
}

export default flowjoActions
