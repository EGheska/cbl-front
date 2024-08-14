import React from "react";
import Linker from "../components/linker";

import "../styles/others.css"

const Others = ({items}) => {
    return (
        <div className="pageClass">
            <Linker className="linker" items={items}/>
            <div className="about-content-box-cbl-others">
                <div className="content-box-title">
                    ComBL in Other Universities
                </div>
                <div className="emptyLine-cbl-others"></div>
                <div className="content-box-inner-others">
                    <p style={{fontFamily: "UniversHeaders"}}>Jimma University (Jimma, Ethiopia)</p>
                    <p><b>Community-Based Training Program (CBTP) Phases for Undergraduate Students:</b></p>
                    <p><b>Phase 1:</b> Students are introduced to the community and conduct analysis to understand the community's challenges and identify areas where interventions might be necessary.</p>
                    <p><b>Phase 2:</b> Students learn about appropriate technologies that can be applied to address the needs of the community identified in the first phase. This phase focusess on teaching students how to select and use technologies that are suitable for the community's context.</p>
                    <p><b>Phase 3:</b> Students enter the design phase, where they develop solutions based on the community's needs and the appropriate technologies they have learned. They work on creating realistic, feasible designs that can be implemented in the community.</p>
                    <p><b>Phase 4:</b> The final phase involves the implementation and intervention stage, where students take their designed solutions and apply them in the community. They spend time working directly with the community to implement the solutions and address the identified challenges.</p>
                </div>
                <div className="content-box-inner-bottom-others">
                    <p><b>Developmental Team Training Program (DTTP) for Postgraduate Students</b></p>
                    <p>
                        This program is structured as a single-semester intiative where postgraduate students identify community problems, propose solutions, and implement these solutions within a one semester timeframe. This program may also involve fundraising effort, where students engage with various stakeholders, including non-governmental organizations, to secure the necessary resources for their projects.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Others;