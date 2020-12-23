import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import { Header } from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { SongRow} from './SongRow'

export const Body = ({spotify}) => {
    const [{discover_weekly}, dispatch] = useDataLayerValue(); 

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:37i9dQZEVXcS6kJZJdm9ht`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
    const playSong = (id) => {
    spotify
        .play({
        uris: [`spotify:track:${id}`],
        })
        .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        });
        });
    };

    return (
        <div className = "body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="listIcon"/>
                <div className="body__infoText">
                    <strong> PLAYLIST</strong>
                    <h2>Discovery Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        className="body__shuffle"
                        onClick={playPlaylist}
                    />
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map(item => 
                    <SongRow playSong={playSong}  track={item.track} key={item.track.id}/>
                )}
            </div>
        </div>
    )
}
