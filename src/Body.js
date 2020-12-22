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
                    <PlayCircleFilledIcon className="body__shuff"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.Map(item => 
                    <SongRow track={item.track} />    
                )}
            </div>
        </div>
    )
}
