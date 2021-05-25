import './signup.css'
import React ,{useState} from 'react';


import {tryAuth} from '../../redux/actions';
import axios from 'axios';

function Signup() {
    // Field States
    const [email , setemail] = useState('');
    const [pass , setpass] = useState('');
    const [confpass , setconfpass] = useState('');
    const [handle , sethandle] = useState('');

    const user = {
      email : email,
      password : pass,
      confirmPassword : confpass,
      handle : handle,
    }
    //Redux Consts
   

    // Posting Signup
  const sign = (e) => {
    e.preventDefault();

    // fetch('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/signup', {
    //   method: 'POST',
    //   body: JSON.stringify(user),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    axios
    .post('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/signup' , user)
    .then((res) => {
      tryAuth(res.data)
      
    })
    .catch((error)=>{
      alert(error)
     });
  
  };

    return (
      <div className="signup">
        <div className="form">
          
              <div className="SIGNUP">
                  <h1>SIGNUP!!</h1>
              </div>
              
              <div className="emailin">
                  <input type="text" placeholder="email" value={email} onChange={(e) => {setemail(e.target.value)}} />
              </div>
              
              <div className="passin">
                <input type="text" placeholder="password" value={pass} onChange={(e) => {setpass(e.target.value)}}/> 
              </div>
              
              <div className="confpassin">
                <input type="text" placeholder="Confirm Password" value={confpass} onChange={(e) => {setconfpass(e.target.value)}}/>
              </div>
              
              <div className="handlein">
                <input type="text" placeholder="Handle(Username)" value={handle} onChange={(e) => {sethandle(e.target.value)}}/>
              </div>

              <div className="buttonarea">
                <button onClick={(e)=> {sign(e)} } >SIGN UP</button>
              </div>
                
              
         
        </div>
        
    </div>
      
    );
  }
  
export default Signup;
  