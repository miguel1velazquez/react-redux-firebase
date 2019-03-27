import React from 'react'
import PropTypes from 'prop-types'
import ReactReduxFlowJoContext from './ReactReduxFlowJoContext'

function ReactReduxFlowJoProvider(props = {}) {
  const { children, dispatch } = props
  return (
    <ReactReduxFlowJoContext.Provider dispatch={dispatch}>
      {children}
    </ReactReduxFlowJoContext.Provider>
  )
}

ReactReduxFlowJoProvider.defaultProps = {}

ReactReduxFlowJoProvider.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired
}

export default ReactReduxFlowJoProvider
