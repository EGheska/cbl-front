import {React} from 'react';
import Linker from '../components/linker';
import '../styles/CBLPage.css';
import {Button} from '@mui/material';

const CBLPage = ({items}) => {
    return (
        <div className='pageClass'>
            <Linker className='linker' items={items}/>
            <div className='about-content-box-cbl'>
                <div className='content-box-title'>
                   about Community-Based Learning
                </div>
                <div className='emptyLine-cbl'></div>
                <div className='content-box-inner-about-header'>
                Community-based learning (ComBL) blends student volunteerism, hands-on learning, and academic content to provide educational credit while benefiting both students and communities. This approach includes different engagement models like problem-based service-learning, direct service-learning, and community-based research. These models focus on a give-and-take relationship where knowledge and resources are shared, fostering cooperation and mutual support between students and community members.
                </div>
                <div className='content-box-inner-about-list'>
                The main criteria that should be followed to be considered a part of community-based learning are:     
                <ul>
                    <li>The course requirements offer a way for students to think about what they have learned from their projects and how this learning connects to the course topic.</li>
                    <li>Community representatives are involved at important points in the project, and their feedback is incorporated into the final solution. A final assessment of both the project and the partnership is conducted, shared as needed, and used to improve future activities.</li> 
                    <li>The result of the project provides the solution for a given task and recognition from the community, instead of just highlighting problems and shortcomings.</li>
                    <li>Students have enough academic knowledge and skills on the specific topic required to successfully finish the project.</li>
                </ul>
                </div>
                <div className='content-box-inner-about-dropouts'>
                    <div className="emptyLineDropouts"></div>
                    <div className='dropouts'>+ Rationale</div>
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts">+ Aims and Objectives</div>
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts">+ Content</div>
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts">+ Learning Activities</div>
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts">+ Teacher Role</div>
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts">+ Material and Resources</div>
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts">+ Grouping</div>
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts">+ Location</div>
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts">+ Time</div>
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts">+ Assessment</div>
                    <div className="emptyLineDropouts"></div>
                </div>
                <div className='content-box-inner-about-footer'>
                    <Button variant="contained">Next</Button>
                </div>
            </div>
        </div>
    );
}

export default CBLPage;