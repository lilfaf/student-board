import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { Grid } from 'semantic-ui-react'
import { initStore } from '../store'
import { editStudent, cancelEditStudent, deleteStudent } from '../actions/index'
import StudentList from '../components/StudentList'
import Student from '../components/Student'
import Layout from '../components/Layout'

class StudentsPage extends Component {
  static getInitialProps ({ store, isServer }) {
    return store.getState()
  }

  _getStudent(studentId) {
    return this.props.students.filter((student) => {
      return student.id == studentId
    })[0]
  }

  render() {
    const studentId = this.props.url.query.id

    return (
      <div>
        <Layout>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <StudentList
                  students={this.props.students}
                  studentId={studentId}
                  onShowStudent={this.props.showStudent}
                />
              </Grid.Column>
              <Grid.Column width={8}>
                {studentId &&
                  <Student
                    student={this._getStudent(studentId)}
                    isEditing={this.props.isEditing}
                    onEditStudent={this.props.editStudent}
                    onCancelEditStudent={this.props.cancelEditStudent}
                    onDeleteStudent={this.props.deleteStudent}
                  />
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isEditing: state.isEditing,
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showStudent: bindActionCreators(cancelEditStudent, dispatch),
    editStudent: bindActionCreators(editStudent, dispatch),
    cancelEditStudent: bindActionCreators(cancelEditStudent, dispatch),
    deleteStudent: bindActionCreators(deleteStudent, dispatch)
  }
}

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps
)(StudentsPage)
