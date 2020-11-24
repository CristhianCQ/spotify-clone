import React from 'react'
import './SidebarOption.css'

export const SidebarOption = ({title, Icon}) => {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="siderbar__icon" /> }
            {Icon ? <h4> {title}</h4> : <p>{title}</p>}
        </div>
    )
}
