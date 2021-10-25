import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderMiddle from './HeaderMiddle'
import HeaderRight from './HeaderRight'
import './Header.css'

const Header = () => {
    return (
        <div className = "header">
            <HeaderLeft />
            <HeaderMiddle />
            <HeaderRight />
        </div>
    )
}
export default Header;