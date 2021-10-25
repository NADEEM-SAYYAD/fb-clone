import React from "react";
import SearchIcon from '@material-ui/icons/Search'
const HeaderLeft = () => {
    return (
        <div className="header__left">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                alt="FB-Logo"
            />
            <div className="header__input">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="search facebook"
                    className="header__input__text"
                />
            </div>
        </div>
    );
};
export default HeaderLeft;
