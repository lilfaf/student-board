import * as actionTypes from '../actions/types'

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_STUDENT:
      const students = state.students.filter((student) => {
        return student.id !== action.studentId
      })
      return Object.assign({}, state, { students: students })
    case actionTypes.EDIT_STUDENT:
      return Object.assign({}, state, { isEditing: true })
    case actionTypes.CANCEL_EDIT_STUDENT:
      return Object.assign({}, state, { isEditing: false })
    case actionTypes.SAVE_STUDENT:
      let student = action.student
      student.id = state.students.length + 1
      return Object.assign({}, state, {
        students: state.students.concat(student)
      })
    case actionTypes.UPDATE_STUDENT:
      const updatedStudents = state.students
      const index = updatedStudents.findIndex((student) => {
        return student.id == action.student.id
      })
      updatedStudents[index] = action.student
      return Object.assign({}, state, { isEditing: false, students: updatedStudents })

    default: return state
  }
}
