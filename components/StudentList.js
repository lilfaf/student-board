import React, { Component } from 'react'
import Router from 'next/router'
import { Table } from 'semantic-ui-react'

export default class extends Component {
  _onRowClick(e) {
    if (typeof this.props.onShowStudent === 'function') {
      this.props.onShowStudent()
    }

    Router.push({
      pathname: '/students',
      query: { id: e.currentTarget.closest('tr').dataset.studentId }
    })
  }

  render() {
    return (
      <div>
        {this.props.students &&
          <Table selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>First name</Table.HeaderCell>
                <Table.HeaderCell>Last name</Table.HeaderCell>
                <Table.HeaderCell width={3}>Gender</Table.HeaderCell>
                <Table.HeaderCell width={1}>Age</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.props.students.map((student, i) => {
                return (
                  <Table.Row
                    key={i}
                    active={this.props.studentId == student.id}
                    onClick={this._onRowClick.bind(this)}
                    data-student-id={student.id}>
                    <Table.Cell>{student.firstName}</Table.Cell>
                    <Table.Cell>{student.lastName}</Table.Cell>
                    <Table.Cell>{student.gender}</Table.Cell>
                    <Table.Cell>{student.age}</Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table>
        }
      </div>
    )
  }
}
