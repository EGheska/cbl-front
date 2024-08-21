import React from "react";
import {Button} from "@mui/material";
import "../styles/results.css";
import {useNavigate} from "react-router-dom";
import * as Routes from "../util/const.js";

const Result = () => {
    const navigate = useNavigate();

    const handleClick = () => {
          navigate(Routes.ADVICE);
    };
    return (

        <div className="pageClass-result">
            <p className="header-results">Community Based Learning Helper</p>
            <div className="content-box-results">
                <div className="content-box-header-results">
                    Results of the Questioner
                    <div className="emptyLine-results"></div>
                    <p className="sub-heading">These are the results based on your answers</p>
                </div>
                <div className="content-box-pic">
                    <img src="/Group109.png"></img>
                </div>
            </div>
            <Button
                variant="contained"
                onClick={handleClick}
                sx={{
                    backgroundColor: "#FFFFFFFF",
                    color: "#000000",
                    width: "213px",
                    height: "38px",
                    alignSelf: "center",
                    borderRadius: "10px",
                    margin: "1%",
                    fontSize: "20px",
                    fontFamily: 'Univers',
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    '&:hover': {
                        backgroundColor: "#FFFFFFFF",
                    },
                }}
            >
                View advice
            </Button>
        </div>
    )
}
export default Result;
