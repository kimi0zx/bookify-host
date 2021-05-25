import { Component } from "react";



class Reviews extends Component {
    
    render() {
        const userState = this.props.userStateprop
        console.log(this.props.reviewprop);
        console.log(this.props.userStateprop);

     
        // <div>
        //                         {userState.reviewLikes.reviewId === reviews.reviewId 
        //                         ? <UnlikeButton reviewId ={reviews.reviewId} userHandle={userState.credentials.handle}/> 
        //                         : <LikeButton reviewId ={reviews.reviewId} userHandle={userState.credentials.handle}/>}
        //                     </div>
        //                     <div>
        //                         {userState.credentials.handle === reviews.userHandle 
        //                         ? <DeleteButton reviewId ={reviews.reviewId} /> 
        //                         : null }
        //                     </div>

        

        return (
            <div>
                {this.props.reviewprop.map(reviews =>(
                <div className="revcard">
                    <div className="revHeader">
                        <div className="image"><img src={reviews.userImage} alt="userimage"></img></div>
                        <div className="handle">@{reviews.userHandle}</div>
                        {/* <div className="likes">
                            {reviews.likeCount}
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </div> */}
                    </div>
                    <div className="revBody">
                        <div className="body"> {reviews.body}</div>
                    </div>
                </div>
            ))}

            </div>
        
        );

    }
}


export default Reviews;