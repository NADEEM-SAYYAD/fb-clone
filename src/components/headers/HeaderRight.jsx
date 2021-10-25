import React from "react";

import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';


const HeaderRight = () => {
    const user = {
        photoURL : "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
        displayName : "Nadeem"
    }
    return (
        <div className="header__right">
            <div className="header__info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>
            <IconButton>
                <AddIcon fontSize="large" />
            </IconButton>
            <IconButton>
                <ForumIcon fontSize="large" />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon fontSize="large" />
            </IconButton>
            <IconButton>
                <ArrowDropDownOutlinedIcon fontSize="large" />
            </IconButton>
        </div>
    );
};
export default HeaderRight;
