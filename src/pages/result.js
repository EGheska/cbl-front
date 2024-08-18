import React from "react";
import {Button} from "@mui/material";
import "../styles/results.css";
const Result = () => {
    return (
        <div>
            <div className="pageClass-result">
                <p>Community Based Learning Helper</p>
                <div className="content-box">
                    <div className="content-box-header">
                        <div className="emptyLine"></div>
                        <p>These are the results based on your answers</p>
                    </div>
                    <div className="content-box-results">

                    </div>

                </div>
            </div>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: "#FFFFFFFF",
                    color: "#000000",
                    width: "213px",
                    height: "38px",
                    borderRadius: "10px",
                    fontSize: "20px",
                    fontFamily: 'Univers',
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    '&:hover': {
                        backgroundColor: "#FFFFFFFF",
                    },
                }}
            >

            </Button>
        </div>
    )
}
export default Result;
