import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'
import { wrapDisplayName } from './utils'
import ReactReduxFlowJoContext from './ReactReduxFlowJoContext'

/**
 * @name createWithFlowJo
 * @description Function that creates a Higher Order Component that
 * which provides `FlowJo` and `dispatch` as a props to React Components.
 *
 * **WARNING!!** This is an advanced feature, and should only be used when
 * needing to access a FlowJo instance created under a different store key.
 * @param {String} [storeKey='store'] - Name of redux store which contains
 * FlowJo state (`state.FlowJo`)
 * @return {Function} - Higher Order Component which accepts an array of
 * watchers config and wraps a React Component
 * @example <caption>Basic</caption>
 * // props.FlowJo set on App component as FlowJo object with helpers
 * import { createWithFlowJo } from 'react-redux-FlowJo'
 *
 * // create withFlowJo that uses another redux store
 * const withFlowJo = createWithFlowJo('anotherStore')
 *
 * // use the withFlowJo to wrap a component
 * export default withFlowJo(SomeComponent)
 */
export const createWithFlowJo = (storeKey = 'store') => WrappedComponent => {
  class WithFlowJo extends Component {
    static wrappedComponent = WrappedComponent

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  const HoistedComp = hoistStatics(WithFlowJo, WrappedComponent)

  const withFlowJo = props => (
    <ReactReduxFlowJoContext.Consumer>
      {flowjo => (
        <HoistedComp flowjo={flowjo} dispatch={flowjo.dispatch} {...props} />
      )}
    </ReactReduxFlowJoContext.Consumer>
  )

  withFlowJo.displayName = wrapDisplayName(WrappedComponent, 'withFlowJo')
  withFlowJo.wrappedComponent = WrappedComponent

  return withFlowJo
}

export default createWithFlowJo()
