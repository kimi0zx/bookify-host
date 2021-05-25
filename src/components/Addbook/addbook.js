import './addbook.css'
import React ,{useState} from 'react';


import {tryAuth} from '../../redux/actions';
import axios from 'axios';

function Addbook() {
    // Field States
    const [title , settitle] = useState('');
    const [author , setauthor] = useState('');
    const [isbnNumber ,  setisbnNumber] = useState('');
    const [description , setdescription] = useState('');
    const [language , setlanguage] = useState('');
    const [link , setlink] = useState('');
    const [year , setyear] = useState('');
    const [genre , setgenre] = useState('');

    const book = {
        title: req.body.title,
		isbnNumber: req.body.isbnNumber,
		rating: "No ratings yet",
		author: req.body.author,
		description: req.body.description,
		language: req.body.language,
		link: req.body.link,
		year: req.body.year,
		genre: req.body.genre,
    }

    // Posting Book
  const sign = (e) => {
    e.preventDefault();

    axios
    .post('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/book' , book)
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
                  <h1>ADD YOUR BOOK</h1>
              </div>
              
              <div className="box">
                  <input type="text" placeholder="title" value={title} onChange={(e) => {settitle(e.target.value)}} />
              </div>
              
              <div className="box">
                <input type="text" placeholder="author" value={author} onChange={(e) => {setauthor(e.target.value)}}/> 
                <div className="box">
                <input type="text" placeholder="description" value={description} onChange={(e) => {setdescription(e.target.value)}}/>
              </div>
              </div>
              
              <div className="box">
                <input type="text" placeholder="description" value={description} onChange={(e) => {setdescription(e.target.value)}}/>
              </div>
              
              <div className="box">
                <input type="text" placeholder="Handle(Username)" value={handle} onChange={(e) => {sethandle(e.target.value)}}/>
              </div>

              <div className="box">
                <input type="text" placeholder="Handle(Username)" value={handle} onChange={(e) => {sethandle(e.target.value)}}/>
              </div>
              <div className="box">
                <input type="text" placeholder="Handle(Username)" value={handle} onChange={(e) => {sethandle(e.target.value)}}/>
              </div>
              <div className="box">
                <input type="text" placeholder="Handle(Username)" value={handle} onChange={(e) => {sethandle(e.target.value)}}/>
              </div>

              <div className="box">
                <button onClick={(e)=> {sign(e)} } >SIGN UP</button>
              </div>
                
              
         
        </div>
        
    </div>
      
    );
  }
  
export default Addbook;
  