export const initialState = {
    user:null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    discovery_weekly:null,
}

const reducer = (state, action) => {
    
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user 
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token 
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists 
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discovery_weekly: action.discovery_weekly 
            }
        default:
            return state;

    }
    
}

export default reducer;

