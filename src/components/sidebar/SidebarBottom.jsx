import React from "react";
import SidebarRow from "./SidebarRow";

const SidebarBottom = () => {
    return (
        <div className="sidebar__bottom">
            <div className="sidebar__bottom--title">
                <h3>Your shortcuts</h3>
            </div>
            <div className="sidebar__bottom--content">
                <SidebarRow
                    src="https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-9/75317333_108050823979255_17253192865677312_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=BMyeUf9IEdcAX_WViQb&_nc_ht=scontent.fpat2-1.fna&oh=012f1f9d3afcaefd93bd1d0b805e8d25&oe=5FE4FE9D"
                    title="Projects On Real Life System"
                />
                <SidebarRow
                    url="https://avatars2.githubusercontent.com/u/56448109?s=60&v=4"
                    title="Code With Akky"
                />
                <SidebarRow
                    url="data:image/jpeg;base64,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"
                    title="Accenture India"
                />
                <SidebarRow
                    url="data:image/png;base64,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"
                    title="Github Social Coding"
                />
                <SidebarRow
                    url="data:image/jpeg;base64,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"
                    title="OMG"
                />
                <SidebarRow
                    url="data:image/png;base64,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"
                    title="REACT"
                />
            </div>
        </div>
    );
};
export default SidebarBottom;
