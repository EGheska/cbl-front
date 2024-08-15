import React, {useEffect} from "react";

const Question = ({items}) => {
    const [isLearning, setIsLearning] = React.useState(false);

    useEffect(() => {
        console.log("Items from questions:", items);
    }, [items]);

    return (
        <div className="content-box">
            <div className="header-box">
                <div className="header-row">

                </div>
                <div className="emptyLine-question-component"></div>
                <div className="header-row"></div>
            </div>
        </div>
    )
};

export default Question;