import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

const genderOptions = [
  { text: 'Male', value: 'M', key: 'M' },
  { text: 'Female', value: 'F', key: 'F' },
]

export default class extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      age: ''
    }
  }

  componentWillMount() {
    if (this.props.student) { this.setState(this.props.student) }
  }

  _onInputChange(event) {
    const target = event.target
    this.setState({ [target.name]: target.value })
  }

  _onSelectChange(event) {
    const value = event.target.textContent == 'Male' ? 'M' : 'F'
    this.setState({ gender: value })
  }

  _onFormSubmit(event) {
    this.props.onFormSubmit(event, this.state)
  }

  render() {
    return (
      <Form
        onSubmit={this._onFormSubmit.bind(this)}>
        <Form.Field>
          <label>First name</label>
          <input
            value={this.state.firstName}
            onChange={this._onInputChange.bind(this)}
            name="firstName"
            placeholder='First name'
            required />
        </Form.Field>
        <Form.Field>
          <label>Last name</label>
          <input
            value={this.state.lastName}
            onChange={this._onInputChange.bind(this)}
            name="lastName"
            placeholder='Last name'
            required />
        </Form.Field>
        <Form.Select
          value={this.state.gender}
          onChange={this._onSelectChange.bind(this)}
          options={genderOptions}
          name="gender"
          label='Gender'
          placeholder='Gender' />
        <Form.Field
          value={this.state.age}
          onChange={this._onInputChange.bind(this)}
          name="age"
          control='input'
          type='number'
          label='Age'
          placeholder='Age' />
        {this.props.children}
      </Form>
    )
  }
}
