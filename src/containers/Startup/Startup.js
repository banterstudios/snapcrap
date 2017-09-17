import React, { Component } from 'react' // eslint-disable-line no-unused-vars

import { connect } from 'react-redux'

export class Startup extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }

  render () {
    const {
      isReady
    } = this.props

    return isReady ? this.props.children : null
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isReady: state.auth.isReady
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Startup)
