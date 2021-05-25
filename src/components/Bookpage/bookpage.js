import React, {useState , useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import './bookpage.css';
import Reviews from './reviews';
import AddReviews from '../Addreview/addreview';
import store from '../../redux/store'


const Bookpage = () => {

    useEffect(()=>{
        bookdetails(); 
      },[]);
    
    const [books , setItems] = useState([]);

    const isAddrev = useSelector(state => state.isAddrev);

    //FETCH getBook
    const bookid = useSelector(state => state.bookid.state);

    const userState = useSelector(state => state.userState);
    
    const url = 'https://asia-south1-bookify-5fa22.cloudfunctions.net/api/books/' + bookid
    
    async function bookdetails() {
        await axios
        .get(url)
        .then(res => {
            const books = res.data;
            setItems(books);

        });
    }
    //FETCH getBook

    console.log(books);
    
 
    const bookrev = (books.reviews) ? <Reviews reviewprop = {books.reviews} userStateprop = {userState}/> : null ;

   

    

    return(
        <div className="view">
            <div key={books.isbnNumber} className="bookcard"> 
              <div className="cover"><img src={books.coverImage} alt="bookcover" width="200px"/></div>
              <div className="Book-Name">Book-Name: {books.title}</div>
              <div className="Genre">Genre: {books.genre+ " "}</div>
              <div className="Rating">Rating: {Math.round((books.ratings + Number.EPSILON) * 100) / 100}</div>
              <div className="author">Author: {books.author}</div>
              <div className="language">Language: {books.language}</div>
              <div className="link">Link: {books.link}</div>
              <div className="Description"> {books.description} </div>
            </div>
            <div className="Mid">
                <br/>
                <h1>Reviews</h1>
                <button onClick= {() => store.dispatch({ type : 'IS_ADD'})}>Add Review</button>
                {isAddrev ? < AddReviews /> : null}
                
            </div>
            
            <div className="Reviews">   
                {bookrev}
            </div>  
        </div>
    );
}

export default Bookpage;


