import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { setRoute } from './../actions'

// components
import Header from './Header'
import TokenList from './Pages/TokenList'

class Layout extends Component {
  constructor (props) {
    super(props)

    this.setRoute = this.setRoute.bind(this)
  }

  setRoute (stage) {
    this.props.actions.setRoute(stage)
  }

  render () {
    return (
      <div>
        <Header />
        <div className='scroll'>
          { this.props.route.stage === 'list' &&
            <TokenList />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  route: state.route
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setRoute: bindActionCreators(setRoute, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
