import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'

function SidebarRow( { src, url, title }) {
    return (
        <div className = "sidebarRow">
            { src && <Avatar className = "sidebarRow__avatar" src = {src} />}
            { url && <img 
                className = "sidebarRow__image"
                src = {url}
                alt = {title}
            />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow