import React, { Component } from 'react'
import { Card, Button, Icon, Message } from 'semantic-ui-react'
import StudentForm from './StudentForm'

export default class extends Component {
  _onDeleteClick() {
    this.props.onDeleteStudent(this.props.student.id)
  }

  _onEditClick() {
    this.props.onEditStudent()
  }

  _onCancelEditClick() {
    this.props.onCancelEditStudent()
  }

  render() {
    if (!this.props.student) {
      return (
        <div>
          <Message positive>
            <Message.Header>
              Student deleted !
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
              <StudentForm student={this.props.student} />
            ) : (
              <div>
                <p><Icon name="user" />{fullName}</p>
                <p><Icon name={humanGender} />{humanGender}</p>
                <p><Icon name="birthday" />{this.props.student.age} years</p>
              </div>
            )
          }
        </Card.Content>
        <Card.Content extra>
          {this.props.isEditing ? (
              <div>
                <Button primary>Save</Button>
                <Button
                  onClick={this._onCancelEditClick.bind(this)}
                  negative>
                  Cancel
                </Button>
              </div>
            ) : (
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
            )
          }
        </Card.Content>
      </Card>
    )
  }
}
