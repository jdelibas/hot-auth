import React from 'react'
import { Modal, Button } from 'semantic-ui-react'

export default function SettingsModal (props) {
  return (
    <Modal dimmer='blurring' open={props.open} onClose={props.toggle}>
      <Modal.Header>Settings</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Button color='red'
            size='mini'
            onClick={e => props.clearAllFiles()}> Clear Cache </Button>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button compact basic
          size='mini'
          onClick={props.toggle}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
