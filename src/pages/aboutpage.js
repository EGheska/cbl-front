import React from "react";
import {Button} from "@mui/material";

const AboutPage = () => {
    return (
        <div className="pageClass">
            <div className="links">
            </div>
            <div className="content-box">
                <div className="content-box-title">
                    Jan van den Akker's Curricular Spiderweb Framework
                </div>
                <div className="emptyLine"></div>
                <div className="content-box-inner">
                    <div className="content-box-inner-header">
                        Jan van den Akker's Curricular Spiderweb is a visualization tool for understanding the interconnected aspects of a curriculum. According to the article, the core of a curriculum generally concerns the aims and content of learning. Changes to this core often necessitate changes to many other aspects of the learning plan. The curricular spider web is a method to visualize these relationships and includes the following ten components:
                    </div>
                    <div className="content-box-inner-picture">

                    </div>
                    <div className="content-box-inner-footer">
                        These components are interconnected, with the rationale serving as the central link that connects all other curriculum components, ideally providing consistency and coherence. The metaphor of the spider web underscores the fragile and interconnected nature of a curriculum, suggesting that if certain threads are stressed more than others, the entire web may be affected​ (Thijs & van den Akker, 2009).
                    </div>
                    <div className="content-box-inner-grey-txt">
                        Thijs, A., & van den Akker, J. (Eds.). (2009). Curriculum in development. Netherlands Institute for Curriculum Development (SLO).
                    </div>
                    <Button variant="contained"
                            sx={{
                                backgroundColor:"#FFFFFFFF",
                                color:"#000000",
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
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;