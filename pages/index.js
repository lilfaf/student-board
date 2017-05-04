import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store'
import { saveStudent } from '../actions/index'
import { Container, Grid } from 'semantic-ui-react'
import Header from '../components/Header'
import StudentList from '../components/StudentList'
import Layout from '../components/Layout'

class Page extends Component {
  static getInitialProps ({ store, isServer }) {
    return store.getState()
  }

  render() {
    return (
      <div>
        <Layout {...this.props}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <StudentList students={this.props.students} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Layout>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveStudent: bindActionCreators(saveStudent, dispatch)
  }
}

export default withRedux(
  initStore,
  null,
  mapDispatchToProps
)(Page)
