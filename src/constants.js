/**
 * @constant
 * @type {String}
 * @description Prefix for all actions within library
 * @example
 * import { constants } from 'react-redux-flowjo'
 * constants.actionsPrefix === '@@reactReduxFlowJo' // true
 */
export const actionsPrefix = '@@reactReduxFlowJo'

/**
 * @constant
 * @type {Object}
 * @description Object containing all action types
 * @property {String} START - `@@reactReduxFlowJo/START`
 * @property {String} SET - `@@reactReduxFlowJo/SET`
 * @property {String} REMOVE - `@@reactReduxFlowJo/REMOVE`
 * @property {String} MERGE - `@@reactReduxFlowJo/MERGE`
 * @property {String} SET_PROFILE - `@@reactReduxFlowJo/SET_PROFILE`
 * @property {String} LOGIN - `@@reactReduxFlowJo/LOGIN`
 * @property {String} LOGOUT - `@@reactReduxFlowJo/LOGOUT`
 * @property {String} LOGIN_ERROR - `@@reactReduxFlowJo/LOGIN_ERROR`
 * @property {String} NO_VALUE - `@@reactReduxFlowJo/NO_VALUE`
 * @property {String} UNAUTHORIZED_ERROR - `@@reactReduxFlowJo/UNAUTHORIZED_ERROR`
 * @property {String} ERROR - `@@reactReduxFlowJo/ERROR`
 * @property {String} SET_LISTENER - `@@reactReduxFlowJo/SET_LISTENER`
 * @property {String} UNSET_LISTENER - `@@reactReduxFlowJo/UNSET_LISTENER`
 * @property {String} AUTHENTICATION_INIT_STARTED - `@@reactReduxFlowJo/AUTHENTICATION_INIT_STARTED`
 * @property {String} AUTHENTICATION_INIT_FINISHED - `@@reactReduxFlowJo/AUTHENTICATION_INIT_FINISHED`
 * @property {String} SESSION_START - `@@reactReduxFlowJo/SESSION_START`
 * @property {String} SESSION_END - `@@reactReduxFlowJo/SESSION_END`
 * @property {String} FILE_UPLOAD_START - `@@reactReduxFlowJo/FILE_UPLOAD_START`
 * @property {String} FILE_UPLOAD_ERROR - `@@reactReduxFlowJo/FILE_UPLOAD_ERROR`
 * @property {String} FILE_UPLOAD_PROGRESS - `@@reactReduxFlowJo/FILE_UPLOAD_PROGRESS`
 * @property {String} FILE_UPLOAD_COMPLETE - `@@reactReduxFlowJo/FILE_UPLOAD_COMPLETE`
 * @property {String} FILE_DELETE_START - `@@reactReduxFlowJo/FILE_DELETE_START`
 * @property {String} FILE_DELETE_ERROR - `@@reactReduxFlowJo/FILE_DELETE_ERROR`
 * @property {String} FILE_DELETE_COMPLETE - `@@reactReduxFlowJo/FILE_DELETE_COMPLETE`
 * @property {String} AUTH_UPDATE_START - `@@reactReduxFlowJo/AUTH_UPDATE_START`
 * @property {String} AUTH_UPDATE_ERROR - `@@reactReduxFlowJo/AUTH_UPDATE_ERROR`
 * @property {String} AUTH_UPDATE_SUCCESS - `@@reactReduxFlowJo/AUTH_UPDATE_SUCCESS`
 * @property {String} PROFILE_UPDATE_START - `@@reactReduxFlowJo/PROFILE_UPDATE_START`
 * @property {String} PROFILE_UPDATE_ERROR - `@@reactReduxFlowJo/PROFILE_UPDATE_ERROR`
 * @property {String} PROFILE_UPDATE_SUCCESS - `@@reactReduxFlowJo/PROFILE_UPDATE_SUCCESS`
 * @property {String} EMAIL_UPDATE_START - `@@reactReduxFlowJo/EMAIL_UPDATE_START`
 * @property {String} EMAIL_UPDATE_ERROR - `@@reactReduxFlowJo/EMAIL_UPDATE_ERROR`
 * @property {String} EMAIL_UPDATE_SUCCESS - `@@reactReduxFlowJo/EMAIL_UPDATE_SUCCESS`
 * @property {String} AUTH_RELOAD_START - `@@reactReduxFlowJo/AUTH_RELOAD_START`
 * @property {String} AUTH_RELOAD_ERROR - `@@reactReduxFlowJo/AUTH_RELOAD_ERROR`
 * @property {String} AUTH_RELOAD_SUCCESS - `@@reactReduxFlowJo/AUTH_RELOAD_SUCCESS`
 * @property {String} AUTH_LINK_START - `@@reactReduxFlowJo/AUTH_LINK_START`
 * @property {String} AUTH_LINK_ERROR - `@@reactReduxFlowJo/AUTH_LINK_ERROR`
 * @property {String} AUTH_LINK_SUCCESS - `@@reactReduxFlowJo/AUTH_LINK_SUCCESS`
 * @property {String} AUTH_EMPTY_CHANGE - `@@reactReduxFlowJo/AUTH_LINK_SUCCESS`
 * @example
 * import { actionTypes } from 'react-redux-flowjo'
 * actionTypes.SET === '@@reactReduxFlowJo/SET' // true
 */
export const actionTypes = {
  START: `${actionsPrefix}/START`,
  SET: `${actionsPrefix}/SET`,
  REMOVE: `${actionsPrefix}/REMOVE`,
  MERGE: `${actionsPrefix}/MERGE`,
  SET_PROFILE: `${actionsPrefix}/SET_PROFILE`,
  LOGIN: `${actionsPrefix}/LOGIN`,
  LOGOUT: `${actionsPrefix}/LOGOUT`,
  LOGIN_ERROR: `${actionsPrefix}/LOGIN_ERROR`,
  NO_VALUE: `${actionsPrefix}/NO_VALUE`,
  UNAUTHORIZED_ERROR: `${actionsPrefix}/UNAUTHORIZED_ERROR`,
  ERROR: `${actionsPrefix}/ERROR`,
  CLEAR_ERRORS: `${actionsPrefix}/CLEAR_ERRORS`,
  SET_LISTENER: `${actionsPrefix}/SET_LISTENER`,
  UNSET_LISTENER: `${actionsPrefix}/UNSET_LISTENER`,
  AUTHENTICATION_INIT_STARTED: `${actionsPrefix}/AUTHENTICATION_INIT_STARTED`,
  AUTHENTICATION_INIT_FINISHED: `${actionsPrefix}/AUTHENTICATION_INIT_FINISHED`,
  SESSION_START: `${actionsPrefix}/SESSION_START`,
  SESSION_END: `${actionsPrefix}/SESSION_END`,
  FILE_UPLOAD_START: `${actionsPrefix}/FILE_UPLOAD_START`,
  FILE_UPLOAD_ERROR: `${actionsPrefix}/FILE_UPLOAD_ERROR`,
  FILE_UPLOAD_PROGRESS: `${actionsPrefix}/FILE_UPLOAD_PROGRESS`,
  FILE_UPLOAD_COMPLETE: `${actionsPrefix}/FILE_UPLOAD_COMPLETE`,
  FILE_DELETE_START: `${actionsPrefix}/FILE_DELETE_START`,
  FILE_DELETE_ERROR: `${actionsPrefix}/FILE_DELETE_ERROR`,
  FILE_DELETE_COMPLETE: `${actionsPrefix}/FILE_DELETE_COMPLETE`,
  AUTH_UPDATE_START: `${actionsPrefix}/AUTH_UPDATE_START`,
  AUTH_UPDATE_SUCCESS: `${actionsPrefix}/AUTH_UPDATE_SUCCESS`,
  AUTH_UPDATE_ERROR: `${actionsPrefix}/AUTH_UPDATE_ERROR`,
  PROFILE_UPDATE_START: `${actionsPrefix}/PROFILE_UPDATE_START`,
  PROFILE_UPDATE_SUCCESS: `${actionsPrefix}/PROFILE_UPDATE_SUCCESS`,
  PROFILE_UPDATE_ERROR: `${actionsPrefix}/PROFILE_UPDATE_ERROR`,
  EMAIL_UPDATE_START: `${actionsPrefix}/EMAIL_UPDATE_START`,
  EMAIL_UPDATE_SUCCESS: `${actionsPrefix}/EMAIL_UPDATE_SUCCESS`,
  EMAIL_UPDATE_ERROR: `${actionsPrefix}/EMAIL_UPDATE_ERROR`,
  AUTH_RELOAD_START: `${actionsPrefix}/AUTH_RELOAD_START`,
  AUTH_RELOAD_ERROR: `${actionsPrefix}/AUTH_RELOAD_ERROR`,
  AUTH_RELOAD_SUCCESS: `${actionsPrefix}/AUTH_RELOAD_SUCCESS`,
  AUTH_LINK_START: `${actionsPrefix}/AUTH_LINK_START`,
  AUTH_LINK_ERROR: `${actionsPrefix}/AUTH_LINK_ERROR`,
  AUTH_LINK_SUCCESS: `${actionsPrefix}/AUTH_LINK_SUCCESS`,
  AUTH_EMPTY_CHANGE: `${actionsPrefix}/AUTH_EMPTY_CHANGE`
}

/**
 * @constant
 * @type {Object}
 * @name defaultConfig
 * @description Default configuration options
 * @property {String} userProfile - `null` Location on FlowJo where user
 * profiles are stored. Often set to `'users'`.
 * @property {String|Function} presence - `null` Location on FlowJo where of currently
 * online users is stored. Often set to `'presence'` or `'onlineUsers'`. If a function
 * is passed, the arguments are: `(currentUser, flowjo)`.
 * @property {String|Function} sessions - `sessions` Location on FlowJo where user
 * sessions are stored (only if presense is set). Often set to `'sessions'` or
 * `'userSessions'`. If a function is passed, the arguments are: `(currentUser, flowjo)`.
 * @property {Boolean} enableLogging - `false` Whether or not flowjo
 * database logging is enabled. Providing `true` turns on error logging
 * (enabled by itself through `logErrors`).
 * @property {Boolean} logErrors - `true` Whether or not to log internal
 * FlowJo errors (i.e. error querying or writing data) to the javascript
 * console .
 * @property {Array|Object} preserveOnLogout - `null` Data parameters to
 * preserve when logging out. If Array is passed, each item represents keys
 * within state.FlowJo.data preserve. If an object is passed, Keys associate
 * with parts of state to preserve, and the values are Arrays contain keys
 * for keys within that slice of state to preserve.
 * @property {Object} preserveOnEmptyAuthChange - `null` Data parameters to
 * preserve when empty auth changes occur. Keys associate with parts of state
 * to preserve, and the values are either Arrays or Functions. If passing an
 * array of keys (i.e. `{ auth: ['key1', 'key2'] }`) - those keys (`'key1'` and
 * `'key2'`) are preserved from that slice of state (`auth`). If passing a
 * function (i.e. `{ auth: (currentAuthState, nextAuthState) => ({}) }`),
 * whatever is returned from the function is set to that slice of state (`auth`).
 * @property {Boolean} updateProfileOnLogin - `true` Whether or not to update
 * user profile when logging in.
 * @property {Boolean} useFirestoreForProfile - `false` Write profile
 * data to Firestore instead of Real Time Database.
 * @property {Boolean} useFirestoreForStorageMeta - `false` Write storage
 * file metadata to Firestore instead of Real Time Database.
 * @property {Boolean} resetBeforeLogin - `true` Whether or not to reset auth
 * and profile when logging in (see issue
 * [#254](https://github.com/prescottprue/react-redux-flowjo/issues/254)
 * for more details).
 * @property {Boolean} enableRedirectHandling - `true` Whether or not to enable
 * redirect handling. This must be disabled if environment is not http/https
 * such as with react-native.
 * @property {Function} onAuthStateChanged - `null` Function that runs when
 * auth state changes.
 * @property {Boolean} enableEmptyAuthChanges - `false` Whether or not to enable
 * empty auth changes. When set to true, `onAuthStateChanged` will be fired with,
 * empty auth changes such as `undefined` on initialization
 * (see [#137](https://github.com/prescottprue/react-redux-flowjo/issues/137)).
 * Requires `v1.5.0-alpha` or higher.
 * @property {Boolean} autoPopulateProfile - `false` REMOVED FROM v2.0.0.
 * Whether or not to automatically populate profile with data loaded through
 * profileParamsToPopulate config.
 * @property {Boolean} setProfilePopulateResults - `true` Whether or not to
 * call SET actions for data that results from populating profile to redux under
 * the data path. For example role parameter on profile populated from 'roles'
 * root. True will call SET_PROFILE as well as a SET action with the role that
 * is loaded (places it in data/roles).
 * @property {Boolean} dispatchOnUnsetListener - `true` Whether or not to
 * dispatch UNSET_LISTENER when disabling listeners for a specific path. USE WITH CAUTION
 * Setting this to true allows an action to be called that removes data
 * from redux (which might not always be expected).
 * @property {Boolean} dispatchRemoveAction - `false` Whether or not to
 * dispatch REMOVE action when calling `remove`. **NOTE** Causes two state
 * updates if a listener is affected by your remove call.
 * @property {String} FlowJoStateName - 'FlowJo' Assumed name of FlowJo
 * state (name given when passing reducer to combineReducers). Used in
 * FlowJoAuthIsReady promise (see
 * [#264](https://github.com/prescottprue/react-redux-FlowJo/issues/264)).
 * @property {Boolean} attachAuthIsReady - `true` Whether or not to attach
 * FlowJoAuthIsReady to store. authIsLoaded can be imported and used
 * directly instead based on preference.
 * @property {Boolean} firestoreNamespace - `firestoreHelpers` Namespace for
 * firestore helpers (**WARNING** Changing this will break firestoreConnect HOC.
 * Do **NOT** change to `'firestore'`)
 * @property {Array} keysToRemoveFromAuth - (default at end)
 * list of keys to remove from authentication reponse before writing to profile
 * (currenlty only used for profiles stored on Firestore). `['appName', 'apiKey'
 * , 'authDomain', 'redirectEventId', 'stsTokenManager', 'uid']`
 * @type {Object}
 */
export const defaultConfig = {
  userProfile: null,
  presence: null,
  sessions: 'sessions',
  enableLogging: false,
  logErrors: true,
  preserveOnLogout: null,
  preserveOnEmptyAuthChange: null,
  resetBeforeLogin: true,
  updateProfileOnLogin: true,
  enableRedirectHandling: true,
  autoPopulateProfile: false,
  setProfilePopulateResults: false,
  dispatchOnUnsetListener: true,
  dispatchRemoveAction: false,
  enableEmptyAuthChanges: true,
  flowjoStateName: 'flowjo',
  attachAuthIsReady: false,
  keysToRemoveFromAuth: [
    'appName',
    'apiKey',
    'authDomain',
    'redirectEventId',
    'stsTokenManager',
    'uid'
  ],
  keysToPreserveFromProviderData: [
    'email',
    'phoneNumber',
    'photoURL',
    'providerId',
    'uid'
  ]
}

/**
 * @constant
 * @type {Array}
 * @description List of all external auth providers that are supported
 * (FlowJo's email/anonymous included by default).
 * @private
 */
export const supportedAuthProviders = [
  'google',
  'github',
  'twitter',
  'facebook'
]

/**
 * @constant
 * @description Top level redux paths that can be populated
 * @type {Array}
 * @private
 */
export const topLevelPaths = ['auth', 'profile', 'ordered', 'data']

/**
 * @constant
 * @description Error message shown if runnning react-redux v6 with a v2.0.0 version
 * of react-redux-flowjo
 * @type {String}
 * @private
 */
export const v3ErrorMessage =
  'Context from react-redux not found. If you are using react-redux v6 a v3.*.* version of react-redux-flowjo is required. Please checkout the v3 migration guide: http://bit.ly/2SRNdiO'

export default {
  actionTypes,
  defaultConfig
}
