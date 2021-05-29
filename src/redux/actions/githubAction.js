import {ERROR_GITHUB_FOLLOWES_API,GITHUB_FOLLOWES_API} from '../constant/type'
import { endpoint } from '../../config/endPoint';
//fetch Api
export const fetchFollowers = (data) => async(dispatch, previousState) => {
    //Api request will be here
    try {
      let res = await fetch(`${endpoint}/users/${data}/following`);
      console.log('data from react component in Action',res);
      let follow = await res ;
      dispatch({
        type: GITHUB_FOLLOWES_API,
        payload:follow
      });
    } catch (error) {
      console.log('error', error)
      dispatch({
        type:ERROR_GITHUB_FOLLOWES_API,
        payload:error
      });
    }
  
   }