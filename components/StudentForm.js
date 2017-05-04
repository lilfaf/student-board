import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export default class extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>First name</label>
          <input
            placeholder='First name'
            value={this.props.student.firstName}
          />
        </Form.Field>
        <Form.Field>
          <label>Last name</label>
          <input
            placeholder='Last name'
            value={this.props.student.lastName}
          />
        </Form.Field>
        <Form.Select
          label='Gender'
          options={genderOptions}
          placeholder='Gender' />
        <Form.Field
          label='Age'
          control='input'
          type='number'
          placeholder='Age' />
      </Form>
    )
  }
}
