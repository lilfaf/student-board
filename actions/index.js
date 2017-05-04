import * as actionTypes from './types'

export const deleteStudent = (studentId) => {
  return {
    type: actionTypes.DELETE_STUDENT,
    studentId: studentId
  }
}

export const editStudent = () => {
  return { type: actionTypes.EDIT_STUDENT }
}

export const cancelEditStudent = () => {
  return { type: actionTypes.CANCEL_EDIT_STUDENT }
}

export const saveStudent = (student) => {
  return {
    type: actionTypes.SAVE_STUDENT,
    student: student
  }
}

export const updateStudent = (student) => {
  return {
    type: actionTypes.UPDATE_STUDENT,
    student: student
  }
}
