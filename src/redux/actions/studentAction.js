import {ADD_STUDENT} from '../constant/type'
//action will recive data from react component and pass to reducer
export const studentAction = (data) => {
  console.log('data from react component in Action',data);
  return{
      type: ADD_STUDENT,
      payload:data
  }
}
