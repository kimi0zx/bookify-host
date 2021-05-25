const initialState = {
    authenticated : false
};

const userState = (state = initialState , action) => {
    switch(action.type){
        case 'SET_USER':
            return  {
                authenticated : true, 
                ...action.payload
            }        
        default:
            return state;     
    }
};

export default userState;