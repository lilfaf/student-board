import React, { Component } from 'react'
import Router from 'next/router'
import { Button, Container, Menu } from 'semantic-ui-react'
import StudentModal from './StudentModal'

export default class extends Component {
  render() {
    return (
      <Menu
        fixed="top"
        inverted>
        <Container>
          <Menu.Item
            name="Student Board"
            onClick={() => { Router.replace('/') }} />
          <Menu.Item>
            <StudentModal saveStudent={this.props.saveStudent} />
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}
