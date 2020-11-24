import React from 'react'
import './Player.css'
import { Sidebar } from './Sidebar'
import { Body } from './Body'

export const Player = ({spotify}) => {
    return (
        <div className= "player">
             <div className="player__body">
                 <Sidebar />
                 <Body />
                  
             </div>

        </div>
    )
}
