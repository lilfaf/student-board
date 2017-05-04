import Router from 'next/router'
import { Button, Container, Menu } from 'semantic-ui-react'

export default () => (
  <Menu
    fixed="top"
    inverted>
    <Container>
      <Menu.Item
        name="Student Board"
        onClick={() => { Router.replace('/') }} />
      <Menu.Item>
        <Button primary>
          Add Student
        </Button>
      </Menu.Item>
    </Container>
  </Menu>
)
