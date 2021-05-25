const addImage = (state = false , action) => {
    switch(action.type){
        case 'ADD_IMAGE':
            return   !state;
               
        default:
            return state;     
    }

};

export default addImage;