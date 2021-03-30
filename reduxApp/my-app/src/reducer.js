const reducer = (state = 0, action ) => {   
    switch (action.type) {
        case 'INK': 
            return state + 1;
        case 'DEC': 
            return state - 1;
        case 'RND':
            return state + action.value;
        default:
            return state;
    }
}

export default reducer;