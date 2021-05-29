import {GITHUB_FOLLOWES_API,ERROR_GITHUB_FOLLOWES_API} from '../constant/type'


let initialState = {
   followers:[],
   error:''
}

function githubReducer(state = initialState, action) {
    switch (action.type) {
        case GITHUB_FOLLOWES_API:
            console.log('GITHUB_FOLLOWES_API in reducers', action.payload);
            let newState ={
                ...state,
                followers:action.payload
            }
             return newState

             case ERROR_GITHUB_FOLLOWES_API:
                console.log('ERROR_GITHUB_FOLLOWES_API in reducers', action.payload);
               
                 return {
                    ...state,
                    error:action.payload

                 }


        default:
            return state;
    }
}

export default githubReducer
