import React from "react";
import Linker from "../components/linker";

const Others = ({items}) => {
    return (
        <div className="pageClass">
            <Linker className="linker" items={items}/>
            <div className="about-content-box-cbl">
                <div className="content-box-title">
                    ComBL in Other Universities
                </div>
            </div>
        </div>
    );
};
export default Others;