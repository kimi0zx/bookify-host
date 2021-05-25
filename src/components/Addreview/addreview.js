import axios from 'axios';
import React ,{ useState} from 'react';
import {useSelector} from 'react-redux';
import store from '../../redux/store';
import './addreview.css';

function AddReviews() {

        const [body , setbody] = useState('');
        const userState = useSelector(state => state.userState);
        const bookid = useSelector(state => state.bookid.state);

        
        const url = 'https://asia-south1-bookify-5fa22.cloudfunctions.net/api/book/'+ bookid +'/review'; 

        

   
        const send = {
            body : body,
            userHandle : userState.credentials.handle , 
            userImage  : userState.credentials.imageUrl , 
        }
       
      

        const addrev = () => {
            axios
            .post(url , send)
            .then((res) => {
                console.log(res)
                window.location.reload();
                store.dispatch({
                    type:  "SET_BOOKID" ,
                    payload : bookid,
                })
                
              })
              .catch((error)=>{
                alert(error)
               });
            
            };


        return (
            <div className="addreview">
                 <textarea  type="text" placeholder="type here..." value={body} onChange={(e) => {setbody(e.target.value)}} />
                
                 <button className="submit" onClick= {()=>{addrev()}} >Review!!</button>

                 <button className="close" onClick = {() => store.dispatch({ type : 'IS_ADD'})}><i class="far fa-window-close"></i></button>
            </div>
        
        );

    }



export default AddReviews;