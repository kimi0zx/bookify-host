const isAddrev = (state = false , action) => {
    switch(action.type){
        case 'IS_ADD':
            return  !state;
        default:
            return state;   
    }
};

export default isAddrev;