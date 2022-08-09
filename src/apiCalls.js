import axios from "axios";

export const loginCallCustomer = async (userCredentials, dispatch)=>{
    dispatch({type:"LOGIN_START"});
    try {
        const res = await axios.post("auth/login/customer", userCredentials);
        dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    } catch(err){
        dispatch({type:"LOGIN_FAILURE", payload: err});
    }
}

export const loginCallDoctor = async (userCredentials, dispatch)=>{
    dispatch({type:"LOGIN_START"});
    try {
        const res = await axios.post("auth/login/doctor", userCredentials);
        dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    } catch(err){
        dispatch({type:"LOGIN_FAILURE", payload: err});
    }
}