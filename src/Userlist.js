
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cin from './Cin'

const Userlist = () => {
    const[User,setUser]=useState([])
    const[Err,setErr]=useState()
    useEffect(()=>{
        const mehdi =()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setUser(res.data))
        .catch(err=>setErr(err))};
        mehdi()
        
            
        },[]);
        console.log("user",User)
    
  return (
    <div>
        {User.map((person)=>{return(<Cin person={person}   />)
        
    })}
    </div>
  )
}

export default Userlist