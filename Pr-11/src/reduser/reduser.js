const initialState = {
    userList : [],
    err : null
}

const contactReducer = (state = initialState,action) =>{
    switch(action.type){
        case 'adddata':
            return {
                ...state,
                userList : [...state.userList,action.payload]
            }
         
        default :
        return state;
    }
}

export default contactReducer