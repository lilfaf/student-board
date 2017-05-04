import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Header from './Header'
import Footer from './Footer'

export default class extends Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <Container>
          { this.props.children }
          <Footer />
        </Container>
      </div>
    )
  }
}
