import React from 'react'
import './Sidebar.css'
import { SidebarOption } from './SidebarOption'
import HomeIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusicOutlined";

import { useDataLayerValue } from './DataLayer';

export const Sidebar = () => {

    const [{playlists}] = useDataLayerValue(); 

    return (
        <div className="sidebar">
            <img
                className = "sidebar__logo" 
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                alt="spotifyLogo"
            />
            <div className = "icons">
                <SidebarOption Icon= {HomeIcon} title="Home"/>
                <SidebarOption Icon= {SearchIcon} title="Searc"/>
                <SidebarOption Icon= {LibraryMusicIcon} title="Your Library"/>
            </div>
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
             
             {playlists?.items?.map((playlist) => (
                 <SidebarOption title= {playlist.name} key={playlist.name}/>

             ))}

            {/* <SidebarOption title= 'Peace' />
            <SidebarOption title= 'Best 2020'  />
            <SidebarOption title= 'Top 50  ' /> */}
        </div>
    )
}
