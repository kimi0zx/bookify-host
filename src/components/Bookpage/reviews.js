import { Component } from "react";
import LikeButton from './likebutton';
import UnlikeButton from './unlikebutton';
import DeleteButton from './deletebutton';


class Reviews extends Component {
    
    render() {

        console.log(this.props.reviewprop);
        
        const userState = this.props.userStateprop

        console.log(userState.userHandle)
         

        return (
            <div>
                {this.props.reviewprop.map(reviews =>(
                <div className="revcard">
                    <div className="revHeader">
                        <div className="image"><img src={reviews.userImage} alt="userimage"></img></div>
                        <div className="handle">@{reviews.userHandle}</div>
                        <div className="likes">
                            {reviews.likeCount}
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <div>
                                {userState.reviewLikes.reviewId === reviews.reviewId 
                                ? <UnlikeButton reviewId ={reviews.reviewId} userHandle={userState.credentials.handle}/> 
                                : <LikeButton reviewId ={reviews.reviewId} userHandle={userState.credentials.handle}/>}
                            </div><div>
                                {userState.credentials.handle === reviews.userHandle 
                                ? <DeleteButton reviewId ={reviews.reviewId} /> 
                                : null }
                            </div>
                        </div>
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