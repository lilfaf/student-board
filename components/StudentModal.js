import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import StudentForm from './StudentForm'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      isOpened: false
    }
  }

  _onOpenClick() {
    this.setState({ isOpened: true })
  }

  _onCancelClick() {
    this.setState({ isOpened: false })
  }

  render() {
    return (
      <Modal
        open={this.state.isOpened}
        size="small"
        trigger={
          <Button
            primary
            onClick={this._onOpenClick.bind(this)}>
            Add Student
          </Button>
        }>
        <Modal.Header>Add Student</Modal.Header>
        <Modal.Content>
          <StudentForm />
          { this.props.children }
        </Modal.Content>
        <Modal.Actions>
          <Button>
            Add
          </Button>
          <Button
            negative
            onClick={this._onCancelClick.bind(this)}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
