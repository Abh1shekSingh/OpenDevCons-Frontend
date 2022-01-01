import React, {createContext, useEffect, useState} from 'react'
import axios from "axios"
import {AxiosResponse} from "axios";

export const myContext = createContext({})
function Context(props) {

    const [userData, setUserData] = useState();

    useEffect(() =>{
        axios.get("https://opendevcons-backend.herokuapp.com/getuser", ({ withCredentials:true })).then((res: AxiosResponse) => {
            if(res.data){
                console.log(res);
                setUserData(res.data);
            }
        })
    },[])

    return (
        <myContext.Provider value={userData}>{props.children}</myContext.Provider>
    )
}

export default Context
