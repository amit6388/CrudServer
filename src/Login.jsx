import React,{useEffect, useState} from 'react'
 import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

export default function Login() {
        


   const navigate=useNavigate()
    const [users,setUsers]=useState([]);
    const [id,setId]=useState('')
    const [email,setEmail]=useState('');
    const getUsers=()=>{
       fetch(' http://localhost:5000/users').then((res)=>{
    res.json().then((resp)=>{
       setUsers(resp)
          }) })
      
    }
     function loginn(){
        users.forEach((data)=>{
            if( data.email===email && data.id==id){
                alert("okk match") 
                let index=id;
                window.localStorage.setItem("login",JSON.stringify(index))
         navigate('/Redirect')
            }
            
        })
     }
    
    useEffect(()=>{
      getUsers()
    },[])
 

  return (
    <div> <center><h1><span style={{color:"red"}}>Login </span>Here</h1></center>
       <div className="container">
        <div className="row">
            <div className="col-3">
            
            </div>
            <div className="col-6">
               
            <Form action=' ' method='POST'>
<Form.Group controlId="form.Name">
  &nbsp; <Form.Label>id</Form.Label>
     <Form.Control type="text" name="name" placeholder="Enter name Here...   "
   value={id} onChange={(e)=>{setId(e.target.value)}}  />
</Form.Group>
<Form.Group controlId="form.Email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="name" placeholder="Enter Your Email here.." value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
</Form.Group> <br />
<center><input type="button" className='btn btn-success' value="Login"  onClick={loginn}/></center>
</Form><br />
            </div>
            <div className="col-3">
               <span className='btn btn-outline-success'  >t unction</span>
            </div>
        </div>
       </div>

    </div>
  )
}
