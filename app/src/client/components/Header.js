import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setSearchTerm,
  addToken,
  openAddTokenModal,
  closeAddTokenModal
} from './../actions'
import { Button, Menu, Input } from 'semantic-ui-react'

import AddTokenModal from './AddTokenModal'

class Header extends Component {
  constructor (props) {
    super(props)

    this.onSearchChange = this.onSearchChange.bind(this)
    this.openAddTokenModal = this.openAddTokenModal.bind(this)
    this.onAddTokenModalClose = this.onAddTokenModalClose.bind(this)
    this.onTokenSave = this.onTokenSave.bind(this)
  }

  onSearchChange (e) {
    this.props.actions.setSearchTerm(e.target.value)
  }

  openAddTokenModal () {
    this.props.actions.openAddTokenModal()
  }

  onAddTokenModalClose () {
    this.props.actions.closeAddTokenModal()
  }

  onTokenSave (token) {
    this.props.actions.addToken(token)
    this.props.actions.closeAddTokenModal()
  }

  render () {
    return(
      <div>
        <AddTokenModal
          open={this.props.modals.addToken}
          onClose={this.onAddTokenModalClose}
          onSave={t => this.onTokenSave(t)}
          />
        <Menu pointing secondary>
          <Menu.Item position='right'>
            <div className='eo eo-fire'></div>
            <div className='eo eo-lock'></div>
          </Menu.Item>
          <Menu.Item position='right'>
            <Input className='icon'
              icon='search'
              placeholder='Search...'
              value={this.props.search.term}
              onChange={this.onSearchChange} />
            <Button basic
              icon='plus'
              color='green'
              size='mini'
              onClick={e => this.openAddTokenModal()}/>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  search: state.search,
  modals: state.modals
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setSearchTerm: bindActionCreators(setSearchTerm, dispatch),
    openAddTokenModal: bindActionCreators(openAddTokenModal, dispatch),
    closeAddTokenModal: bindActionCreators(closeAddTokenModal, dispatch),
    addToken: bindActionCreators(addToken, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
