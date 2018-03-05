import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setRoute } from './../../actions'
import Fuse from 'fuse.js'
import { Input } from 'semantic-ui-react'

import Token from './../Token'

class TokenList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      filtered: [],
      searchTerm: ''
    }
  }

  shouldComponentUpdate(props, state) {
    if (props.search.term !== this.state.searchTerm) {
      return true
    }
    if (JSON.stringify(state) !== JSON.stringify(this.state)) {
      return true
    }
    return false
  }

  componentWillReceiveProps (props) {
    const fuse = new Fuse(props.tokens, {
      keys: ['name']
    })
    let filtered = props.tokens
    if (props.search.term.trim() !== '') {
      filtered = fuse.search(props.search.term)
    }
    this.setState({
      searchTerm: props.search.term,
      filtered,
    })
  }

  render () {
    return (
      <div>
        {this.state.filtered.length === 0 &&
          this.state.searchTerm.trim() === '' &&
          <p> No Tokens </p>
        }
        {this.state.filtered.length === 0 &&
          this.state.searchTerm.trim() !== '' &&
          <p> No results found in {this.props.tokens.length} items </p>
        }
        {this.state.filtered.length > 0 &&
          this.state.filtered.map(token =>
          <Token key={token.id}
            name={token.name}
            secret={token.secret} />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  tokens: state.tokens,
  search: state.search
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setRoute: bindActionCreators(setRoute, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TokenList)
