import React from 'react'
import './Sidebar.css'
import { SidebarOption } from './SidebarOption'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <img
                className = "sidebar__logo" 
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                alt="spotifyLogo"
            />
            <SidebarOption Icon= {HomeIcon} title="Home"/>
            <SidebarOption Icon= {SearchIcon} title="Searc"/>
            <SidebarOption Icon= {LibraryMusicIcon} title="Your Library"/>
            
             
        </div>
    )
}
