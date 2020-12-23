export const initialState = {
    user:null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    discover_weekly:null,
    spotify: null,
   
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
                discover_weekly: action.discovery_weekly 
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
            
        case "SET_SPOTIFY":
            return {
            ...state,
            spotify: action.spotify,
            };
        default:
            return state;

    }
    
}

export default reducer;

