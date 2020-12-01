import React from 'react'
import './Body.css'
import { Header } from './Header'

export const Body = ({spotify}) => {
    return (
        <div className = "body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src="" alt=""/>
                <div className="body__infoText">
                    <strong> PLAYLIST</strong>
                    <h2>Discovery Weekly</h2>
                    <p>description...</p>
                </div>
            </div>
        </div>
    )
}
