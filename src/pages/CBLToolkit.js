import React from "react";
import Linker from "../components/linker";
import {Button} from "@mui/material";
import Question from "../components/question";

const CBLToolkit = ({items}) => {

    return (
        <div className="pageClass">
            <Linker items={items}/>
            <div className="questionaire-container">
                <div className="content-box-header">Community-Based Learning Helper</div>
                <div classname="question-container">
                    <Question/>
                </div>
            </div>
            <div className="questionaire-footer">
                <Button variant="contained"

                >
                    Next
                </Button>
            </div>
        </div>
    )
};

export default CBLToolkit;