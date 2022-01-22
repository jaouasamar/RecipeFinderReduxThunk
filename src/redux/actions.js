import axios from "axios";
import { GET_DATA, GET_DATA_FAIL, GET_DATA_SUCCESS } from "./actionType";

export const getData = (searchString) => async(dispatch)=> {
    const APP_ID="3b950f4e";
const APP_KEY=
"685f162b2a511fff503e267d3ac9d122";
  dispatch({
      type:GET_DATA,
      
});
try{
    const res = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`)
   
   console.log(res);
    dispatch({
        type:GET_DATA_SUCCESS,
        payload:res.data.hits
    })
    
}catch (error){
  dispatch({
      type:GET_DATA_FAIL,
      payload:error.message,
  });
}
}
  

