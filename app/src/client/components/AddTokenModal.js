import React from 'react'
import { Modal, Button, Form, Divider } from 'semantic-ui-react'

export default function AddTokenModal (props) {
  let name, secret, url
  const save = () => {
    const token = {
      name: name.value,
      secret: secret.value,
      url: url.value
    }
    props.onSave(token)
  }
  return (
    <div>
      <Modal  open={props.open} onClose={props.onClose}>
        <Modal.Header>Add Token</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input placeholder='Name' ref={el => name = el}/>
            </Form.Field>
            <Form.Field>
              <label>Secret</label>
              <input placeholder='Name' ref={el => secret = el}/>
            </Form.Field>
            <Divider />
            <Form.Field>
              <label>Url</label>
              <input placeholder='Name' ref={el => url = el}/>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button compact basic
            color='green'
            size='mini'
            onClick={save}>
            Add
          </Button>
          <Button compact basic
            size='mini'
            onClick={props.onClose}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}
