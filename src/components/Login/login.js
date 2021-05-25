import './login.css';

import React ,{useState} from 'react';
import axios from 'axios';

import {tryAuth} from '../../redux/actions'


function Login() {

  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');

  const user = {
    email : username ,
    password : password,
  }
  
  

  // Posting Login
  const log = (e) => {
    e.preventDefault();

    // fetch('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/login', {
    //   method: 'POST',
    //   body: JSON.stringify(user),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })

    axios
    .post('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/login' , user)
    .then( (res) => {
      tryAuth(res.data)
    })
    .catch((error)=>{
      alert(error)
    })


    // .then((res) =>{
    //   if (res.ok){
    //     return res.json();
    //   }else{
    //     console.log(res);
    //     throw new Error('Wrong Credentials');
    //   }
    // })
    // .then((res) => { 
      
    //   console.log(res)

    //   if(flag===0) {
    //     tryAuth(res)
    //   }
     
    // })
    // .catch((error)=>{
    //   alert(error)
    //   flag = 1 ;
    // }) 
  
  // Trying to Login
    // function tryAuth(res) {
      
    //     setAuthid(res.token);
    //     store.dispatch(login());
        
    // }
    // function setAuthid(token) {
    //   const FBIdToken = `Bearer ${token}`;
	  //   localStorage.setItem("FBIdToken", FBIdToken);
    // }  
  };
  
  return (
    <div className="login">

        <div className="art">
               <div>
                 
               </div>
        </div>

        <div className="form">
          <div>
              <div className="form_elements">
                <h1>LOGIN HERE</h1>
              </div>
              
             <div className="form_elements">
                <label htmlFor="email">Email:</label><br />
                <input  type="text" placeholder="email" value={username} onChange={(e) => {setUsername(e.target.value)}} />
             </div>

              <div className="form_elements">
                <label htmlFor="password">Password:</label><br />
                <input type="password" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
              </div>
              <div className="form_elements">
                <button onClick={(e)=> {log(e)} } >Login</button>
              </div>
          </div>
        </div>
        
    </div>
    
  );
}

export default Login;
