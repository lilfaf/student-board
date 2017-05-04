import React, { Component } from 'react'
import Router from 'next/router'
import { Card, Button, Icon, Message } from 'semantic-ui-react'
import StudentForm from './StudentForm'

export default class extends Component {
  _onDeleteClick() {
    this.props.deleteStudent(this.props.student.id)
    Router.replace('/students')
  }

  _onEditClick() {
    this.props.editStudent()
  }

  _onCancelEditClick() {
    this.props.cancelEditStudent()
  }

  _onFormSubmit(event, student) {
    event.preventDefault()
    this.props.updateStudent(student)
  }

  render() {
    if (!this.props.student) {
      return (
        <div>
          <Message negative>
            <Message.Header>
              Student Not Fount!
            </Message.Header>
          </Message>
        </div>
      )
    }
    const fullName = `${this.props.student.firstName} ${this.props.student.lastName}`
    const headerContext = this.props.isEditing ? 'Editing' : 'About'
    const header = `${headerContext} ${fullName}`
    const humanGender = this.props.student.gender == 'M' ? 'male' : 'female'

    return (
      <Card fluid>
        <Card.Content header={header} />
        <Card.Content>
          {this.props.isEditing ? (
              <StudentForm
                student={this.props.student}
                onFormSubmit={this._onFormSubmit.bind(this)}>
                <Button
                  type="submit"
                  primary>
                  Save
                </Button>
                <Button
                  onClick={this._onCancelEditClick.bind(this)}
                  negative>
                  Cancel
                </Button>
              </StudentForm>
            ) : (
              <div>
                <p><Icon name="user" />{fullName}</p>
                <p><Icon name={humanGender} />{humanGender}</p>
                <p><Icon name="birthday" />{this.props.student.age} years</p>
              </div>
            )
          }
        </Card.Content>
        {!this.props.isEditing &&
          <Card.Content extra>
            <div>
              <Button
                onClick={this._onEditClick.bind(this)}>
                Edit
              </Button>
              <Button
                onClick={this._onDeleteClick.bind(this)}
                negative>
                Delete
              </Button>
            </div>
          </Card.Content>
        }
      </Card>
    )
  }
}
