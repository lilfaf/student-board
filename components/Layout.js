import { Container } from 'semantic-ui-react'
import Header from './Header'
import Footer from './Footer'

export default ({ children }) => (
  <div>
    <Header />
    <Container>
      { children }
      <Footer />
    </Container>
  </div>
)
