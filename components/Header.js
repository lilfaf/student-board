import Router from 'next/router'
import { Button, Container, Menu } from 'semantic-ui-react'
import StudentModal from './StudentModal'

export default () => (
  <Menu
    fixed="top"
    inverted>
    <Container>
      <Menu.Item
        name="Student Board"
        onClick={() => { Router.replace('/') }} />
      <Menu.Item>
        <StudentModal />
      </Menu.Item>
    </Container>
  </Menu>
)
