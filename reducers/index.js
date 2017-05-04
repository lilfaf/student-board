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

    default: return state
  }
}
