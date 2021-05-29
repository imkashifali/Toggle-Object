import {ADD_STUDENT} from '../constant/type'

let initialState = {
    name: 'ali',
    age: 25,
    class: 'Ms software',
    students: [],
}

function studentReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_STUDENT:
            console.log('data in reducers', action.payload);
            let newState ={
                ...state,
                name:'javid'
            }
             return newState

        default:
            return state;
    }
}

export default studentReducer
