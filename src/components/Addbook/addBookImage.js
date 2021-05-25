// import axios from "axios";
// import { Component } from "react";
// import store from "../../redux/store";


// class AddBookImage extends Component() {



//     render () {
//     const isbnNumber = localStorage.getItem("addImage");

//     console.log(isbnNumber);
    
//     const formData = {};
  


//     function sendImage() {
//         axios
//         .post ('https://asia-south1-bookify-5fa22.cloudfunctions.net/api/book' , formData)
//         .then((res) => {
//             console.log(res);
//             store.dispatch({ type : 'ADD_IMAGE'});
//         })    
//         .catch((error)=>{
//             alert(error)
//            });
//     }

//     return (
//         <div>
//                <div className="form">
          
//           <div className="SIGNUP">
//               <h1>Add an Image for your book</h1>
//           </div>

//          <div>
//              <input type="file"
// 					id="imageInput"
// 					hidden="hidden"
// 					onChange={this.handleImageChange} ></input>
//          </div>

//           <div className="box">
//             <button onClick = {() =>{sendImage()}}>ADD IMAGE</button>
//             <button onClick = {() => store.dispatch({ type : 'ADD_IMAGE'})} >skip</button>
//           </div>
//         </div>
//        </div>   
//     );
//     }
// }

// export default AddBookImage;