import React from "react";
import Linker from "../components/linker";

const Others = ({items}) => {
    return (
        <div className="pageClass">
            <Linker className="linker" items={items}/>

        </div>
    );
};
export default Others;