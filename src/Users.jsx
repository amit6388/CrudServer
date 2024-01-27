 
 import React,{useState} from 'react';
 import { Link} from 'react-router-dom';
 import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 export default function Users() {
  const [name,setName]=useState("");
  const [name1,setName1]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");
  const [password,setPassword]=useState("");
  console.log(name1)
function saveData(){
  let dat={name,email,password,mobile}
console.log(dat);
 fetch('http://localhost:5000/users',{
  method:'POST',
  headers:{
    'Accept':'application/json',
  'Content-Type':'application/json'
        },
    body:JSON.stringify(dat)
  }).then((res)=>{
     
  })
}
 function Update(){
  var id=JSON.parse(window.localStorage.getItem("edit"))
  
  let dat={name,email,password,mobile}
  console.log(dat);
   fetch(`http://localhost:5000/users/${id}`,{
    method:'PUT',
    headers:{
      'Accept':'application/json',
    'Content-Type':'application/json'
          },
      body:JSON.stringify(dat)
    }).then((res)=>{
       
    })
    window.localStorage.clear()
 }

  return (
    <React.Fragment>
   
   <div className="container-fluid box bg-light">
          <div className="row">
          <div className="col-sm-4">{name1}
           <input type="checkbox" required  
               value={name1} onChange={(event)=>{
                setName1(!name1) }}
                 placeholder='Enter Your Name' />
            </div>
            <div className="col-sm-4 " style={{background:"light"}}>
              <div className="row">
                <div className="col-sm-12 login">
                <h3 style={{fontFamily:"Georgia"}}><span style={{color:"red"}}>Login</span>Here</h3><hr/>
              Name : <input type="text" required className='form-control'
               value={name} onChange={(event)=>{
                setName(event.target.value) }}
                 placeholder='Enter Your Name' />
              Email : <input type="email" required  className='form-control' autoComplete='off' placeholder='Enter Your Email'
                value={email} onChange={(event)=>{
                  setEmail(event.target.value) }} />
              Password : <input type="password" required  className='form-control' autoComplete='off' placeholder='Enter Your Password' 
                value={password} onChange={(event)=>{
                  setPassword(event.target.value) }}/>
              Mobile : <input type="number" required  className='form-control' placeholder='Enter your Mobile' 
                value={mobile} onChange={(event)=>{
                  setMobile(event.target.value) }}/><br/>
          <Link to="/Showusers">      <button className='btn btn-outline-success btn' onClick={saveData}>Submit</button> </Link>
          <Link to="/Showusers"> <button className='btn btn-outline-success btn' onClick={Update}>Update</button> </Link>   
  &nbsp; &nbsp; &nbsp;
               
                </div>
              </div>
            </div>
            <div className="col-sm-4">
               
            </div>
          </div>
        </div><br/>
  </React.Fragment>
   )
 }
 
  
