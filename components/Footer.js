import { Container, Menu, Icon } from 'semantic-ui-react'

export default () => (
  <Menu fixed="bottom">
    <Container>
      <Menu.Item>
        <p>
          Made with <Icon name="heart" color="red" />by
          <a href="https://github.com/lilfaf"> Louis Larpin</a>
        </p>
      </Menu.Item>
    </Container>
  </Menu>
)
