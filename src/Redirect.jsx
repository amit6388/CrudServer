import React,{useState,useEffect} from 'react'

function Redirect() {
    const [users,setUsers]=useState([]);
   
    function loaad(){
   let    id=JSON.parse(window.localStorage('login'))
      alert(id)
        fetch(' http://localhost:5000/users').then((res)=>{
        res.json().then((resp)=>{
           setUsers(resp)
              }) })
       
    }
    useEffect(()=>{
        loaad()
    },[])
  return (
    <div>
 <center> {
    <h1>hi hellow</h1>
  }
  </center>
    </div>
  )
}

export default Redirect
