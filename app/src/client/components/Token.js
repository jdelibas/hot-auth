import React, { Component } from 'react'
import { Card, Button, Progress, Header } from 'semantic-ui-react'
import { clipboard } from 'electron'
import { generateToken } from 'node-2fa'

export default class Token extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: props.name,
      secret: props.secret,
      token: generateToken(props.secret).token,
      time: 0,
      total: 30
    }

    this.interval = null
    this.tick = this.tick.bind(this)
    this.copyToken = this.copyToken.bind(this)
  }

  componentDidMount () {
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  tick () {
    let second = new Date().getSeconds() + 1
    if (second > 30) {
      second -= 30
    }
    return this.setState({
      time: second,
      token: generateToken(this.state.secret).token
    })
  }

  copyToken () {
    clipboard.writeText(this.state.token)
    new Notification('Hot Auth', {
      body: `${this.state.name} token copied`
    })
  }

  render () {
    return (
      <Card fluid raised>
        <Card.Content>
          <Card.Header>
            { this.state.name }
          </Card.Header>
          {this.state.url &&
            <Card.Meta>
            { this.state.url }
            </Card.Meta>
          }
        </Card.Content>
        <Card.Content extra onClick={e => this.copyToken()}>
          <Header size='huge'> { this.state.token } </Header>
        </Card.Content>
        <Progress total={this.state.total}
          value={this.state.time}
          attached='bottom' />
      </Card>
    )
  }
}
