import React, { useEffect, useState } from 'react'
import {Link}  from 'react-router-dom';
const UseEffectApi=()=> {
  const [users,setUsers]=useState([]);
  
const getUsers=()=>{
   fetch(' http://localhost:5000/users').then((res)=>{
res.json().then((resp)=>{
   setUsers(resp)
      }) })
  
}
  

useEffect(()=>{
  getUsers()
},[])
function del(x){
 if(window.confirm("do you want to delete ?")===true){
  fetch(`http://localhost:5000/users/${x}`,{method:'DELETE'} ).then((res)=>{res.json().then((resp)=>{
  console.log("<h1>deleted success fully</h1>")
 })})
 }
 getUsers()
}
function edit(x){

  window.localStorage.setItem("edit", JSON.stringify(x));
}
  return (
    <div>
     
     <center> <h1><span style={{color:"red",}}>ThisIsU</span>serData</h1></center>
 
      <table className='table table-dark'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>email</th>
            <th>Mobile</th>
            <th>Edit</th>
            <th>Delete</th>
           
          </tr>
        </thead>
        <tbody  className='table table-hover'>
        {users.map((el,index)=>{
        return(<>
        <tr>
          <td>{el.id}</td>
          <td>{el.name}</td>
          <td>{el.email}</td>
          <td>{el.mobile}</td>
  <Link to="/Users">   <td><button className='btn btn-outline-info' onClick={()=>edit(el.id)} >Edit</button></td></Link>    
          <td><button className='btn btn-outline-success' onClick={()=>del(el.id)} >Delete</button></td>
         
        </tr>
        </>)
      })
      
      
      }
        </tbody>
      </table>
     
    </div>
  )


}

export default UseEffectApi









