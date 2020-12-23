import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { useDataLayerValue } from './DataLayer';
import { Login } from './Login';
import { Player } from './Player';
import { getTokenFromResponse } from './spotify';

const spotify = new SpotifyWebApi();

function App() {

  // const [token, setToken] = useState(null)
  const [{user,token}, dispatch] = useDataLayerValue(); 

  useEffect(() => {

    const hashValue = getTokenFromResponse(); 
    // After get the hash is better to clean it, so nobody can get it
    window.location.hash = ""; 
    const _token = hashValue.access_token;

    if (_token) {
      // setToken(_token); 
      spotify.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      

      spotify.getMe()
        .then( (user) => {
          dispatch({
            type: 'SET_USER',
            user:user 
          });
        })

        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists: playlists
          })
        });

        spotify.getPlaylist('37i9dQZEVXcS6kJZJdm9ht').then((response) => {
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discovery_weekly: response,
          })
        })

        dispatch({
          type: "SET_SPOTIFY",
          spotify,
        });
        
    }

    console.log('I have the token 👉',token );   

  }, [token, dispatch]);

  return (
    <div className="App">
      {
        token ? 
        // (<Player />):
        <Player spotify= {spotify} />:
        <Login />
      }
    </div>
  );
}

export default App;
