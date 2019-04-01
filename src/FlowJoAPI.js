//* *************_Constants_****************//
const SLASH = '/'
export const All = "All";

//* ***************_API_******************//
const API = '/api' // *Base name
const VERSION = '/v1' // *API version

//* ***************_Running_******************//
const ON = '/on'

//* ***************_Collections_******************//
const WORKSPACES = `${SLASH}workspaces`
const GROUPS = `${SLASH}groups`
const SAMPLES = `${SLASH}samples`
const PARAMETERS = `${SLASH}parameters/`
const POPULATIONS = `${SLASH}populations`
const LAYOUTS = `${SLASH}layouts`
const TABLES = `${SLASH}tables`
const PARAMETER_SETS = `${SLASH}parameterSets`

//* ***************_GET_******************//
const ALL = `${SLASH}all`
const COUNT = `${SLASH}count`
const EXPORT = `${SLASH}export`
const IMPORT = `${IMPORT}import`

const FLOWJOAPI = {
  ON: API + VERSION + ON, // GET // NA *Checks if API is running
  WORKSPACES: {
    ALL: API + VERSION + WORKSPACES + ALL, // GET // NA -> Names
    COUNT: API + VERSION + WORKSPACES + COUNT // GET // NA -> Active workspace count
  },
  GROUPS: {
    ALL: API + VERSION + GROUPS + ALL,
    COUNT: API + VERSION + GROUPS + COUNT
  },
  SAMPLES: {
    ALL: API + VERSION + SAMPLES + ALL,
    COUNT: API + VERSION + SAMPLES + COUNT
  },
  POPULATIONS: {
    ALL: API + VERSION + POPULATIONS + ALL,
    EXPORT: API + VERSION + POPULATIONS + EXPORT,
    COUNT: API + VERSION + POPULATIONS + COUNT
  },
  PARAMETERS: {
    ALL: API + VERSION + PARAMETERS + ALL,
    EXPORT: API + VERSION + PARAMETERS + EXPORT,
    IMPORT: API + VERSION + PARAMETERS + IMPORT,
    COUNT: API + VERSION + PARAMETERS + COUNT
  },
  PARAMETER_SETS: {
    ALL: API + VERSION + PARAMETER_SETS + ALL,
    EXPORT: API + VERSION + PARAMETER_SETS + EXPORT,
    COUNT: API + VERSION + PARAMETER_SETS + COUNT
  },
  LAYOUTS: {
    ALL: API + VERSION + LAYOUTS + ALL,
    COUNT: API + VERSION + LAYOUTS + COUNT
  },
  TABLES: {
    ALL: API + VERSION + TABLES + ALL,
    COUNT: API + VERSION + TABLES + COUNT
  }
}

export default FLOWJOAPI