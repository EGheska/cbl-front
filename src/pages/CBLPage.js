import {React, useState} from 'react';
import Linker from '../components/linker';
import '../styles/CBLPage.css';
import {Button} from '@mui/material';

const CBLPage = ({items}) => {

    const [openSection, setOpenSection] = useState({
        rationale: false,
        aims: false,
        content: false,
        learning: false,
        teacher: false,
        resources: false,
        grouping: false,
        location: false,
        time: false,
        assesment: false,
    });

    const toggleSection = (section) => {
        setOpenSection((prevOpenSection) => ({
            ...prevOpenSection,
            [section]: !prevOpenSection[section],
        }));
    };

    const getSign = (section) => {
        return openSection[section] ? '-' : '+';
    };

    return (
        <div className='pageClass'>
            <Linker className='linker' items={items}/>
            <div className='about-content-box-cbl'>
                <div className='content-box-title'>
                    about Community-Based Learning
                </div>
                <div className='emptyLine-cbl'></div>
                <div className='content-box-inner-about-header'>
                    Community-based learning (ComBL) blends student volunteerism, hands-on learning, and academic
                    content to provide educational credit while benefiting both students and communities. This approach
                    includes different engagement models like problem-based service-learning, direct service-learning,
                    and community-based research. These models focus on a give-and-take relationship where knowledge and
                    resources are shared, fostering cooperation and mutual support between students and community
                    members.
                </div>
                <div className='content-box-inner-about-list'>
                    The main criteria that should be followed to be considered a part of community-based learning are:
                    <ul>
                        <li>The course requirements offer a way for students to think about what they have learned from
                            their projects and how this learning connects to the course topic.
                        </li>
                        <li>Community representatives are involved at important points in the project, and their
                            feedback is incorporated into the final solution. A final assessment of both the project and
                            the partnership is conducted, shared as needed, and used to improve future activities.
                        </li>
                        <li>The result of the project provides the solution for a given task and recognition from the
                            community, instead of just highlighting problems and shortcomings.
                        </li>
                        <li>Students have enough academic knowledge and skills on the specific topic required to
                            successfully finish the project.
                        </li>
                    </ul>
                </div>
                <div className='content-box-inner-about-dropouts'>
                    <div className="emptyLineDropouts"></div>
                    <div className='dropouts'
                         onClick={() => toggleSection('rationale')}>{getSign('rationale')} Rationale
                    </div>
                    {openSection.rationale && (
                        <div className="section-content">
                            The rationale of ComBL enhances students ‘engagement, help them better understand and apply
                            knowledge,
                            and develop critical thinking skills, problem-solving skills, and teamwork. It presents them
                            with real-world
                            problems and, possibly, future employers. Additionally, it allows them to apply theoretical
                            knowledge in practice,
                            trying to overcome the set issues. This approach provides a deeper understanding of the
                            subject and a more
                            meaningful learning experience (Centre for Teaching Excellence, n.d.).
                        </div>
                    )}
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts" onClick={() => toggleSection('aims')}>{getSign('aims')} Aims and
                        Objectives
                    </div>
                    {openSection.aims && (
                        <div className="section-content">
                            The aims and objectives of Community-Based Learning (ComBL) include connecting classroom
                            learning with
                            real-world experiences to address the gap between theoretical knowledge and practical
                            application, enhancing
                            student motivation and engagement by making learning relevant and meaningful and developing
                            critical skills
                            such as problem-solving, critical thinking, teamwork, and leadership. CBL also promotes
                            civic responsibility and
                            social awareness by involving students in community service and encourages a continuous
                            learning mindset
                            from preschool through adulthood, aiming to create a more integrated, practical, and
                            community-oriented
                            education system (Owens & Wang, 1996).
                        </div>
                    )}
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts" onClick={() => toggleSection('content')}>{getSign('content')} Content
                    </div>
                    {openSection.content && (
                        <div className="section-content">
                            In the context of community-based learning, students learn to apply theoretical concepts
                            from their courses to
                            real-world situations, enhancing their understanding and recall of academic material.
                            Additionally, they develop
                            skills in planning, executing, and managing community projects, which are crucial for their
                            professional
                            development. Addressing real-world challenges further enhances critical thinking skills as
                            students examine
                            intricate problems and develop creative solutions (Center for Innovation in Teaching &
                            Learning, n.d.).
                        </div>
                    )}
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts" onClick={() => toggleSection('learning')}>{getSign('learning')} Learning
                        Activities
                    </div>
                    {openSection.learning && (
                        <div className="section-content">
                            According to the article “Community-Based Education: A Participatory Approach to Achieve the
                            Sustainable
                            Development Goal” (2017), learning activities in community-based education involve
                            participatory projects,
                            service learning, collaborative research, and experiential learning. These activities enable
                            students to address
                            community needs through real-world problem-solving, integrate community service with
                            academic coursework,
                            15 and conduct research with community members. This approach promotes the practical
                            application of academic
                            knowledge, fostering critical thinking, enhancing civic engagement, and developing
                            professional skills.
                        </div>
                    )}
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts" onClick={() => toggleSection('teacher')}>{getSign('teacher')} Teacher
                        Role
                    </div>
                    {openSection.teacher && (
                        <div className="section-content">
                            In community-based learning, teachers connect classroom learning to real-world community
                            issues (Joseph &
                            Said, 2020). Educators guide, helping students engage with local problems that enhance their
                            understanding of
                            academic subjects (Harfitt, 2018). Teachers build strong relationships with community
                            members, integrate local
                            resources and cultural elements into their lessons, and mentor students through hands-on
                            projects (Datnow,
                            2020). Additionally, they advocate for the community's needs, making learning more relevant
                            and engaging while
                            promoting cultural awareness and inclusivity among students (Joseph & Said, 2020).
                        </div>
                    )}
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts" onClick={() => toggleSection('resources')}>{getSign('resources')} Material
                        and Resources
                    </div>
                    {openSection.resources && (
                        <div className="section-content">
                            Empty spaces, what are we living for?
                            Abandoned places, I guess we know the score, on and on
                            Does anybody know what we are looking for?
                            Another hero, another mindless crime
                            Behind the curtain, in the pantomime
                            Hold the line
                            Does anybody want to take it anymore?
                            The show must go on
                            The show must go on, yeah
                            Inside my heart is breaking
                            My makeup may be flaking
                            But my smile, still, stays on
                        </div>
                    )}
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts" onClick={() => toggleSection('grouping')}>{getSign('grouping')} Grouping
                    </div>
                    {openSection.grouping && (
                        <div className="section-content">
                            Students engaged in community-based learning collaborate with a variety of local partners.
                            According to the
                            article "A Guide to Community-Based Learning," these partners include local institutions,
                            experts, businesses,
                            non-profit organizations, and community members. This approach involves using the community
                            as an extended
                            classroom where students can apply their learning to real-life settings and issues, often
                            through activities such as
                            internships, volunteering, research projects, and participatory community actions. This
                            engagement helps make
                            education more relevant and practical by connecting academic content with real-world
                            experiences and local
                            contexts (Lynch, 2021).
                        </div>
                    )}
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts" onClick={() => toggleSection('location')}>{getSign('location')} Location
                    </div>
                    {openSection.location && (
                        <div className="section-content">
                            Is this the real life? Is this just fantasy?
                            Caught in a landslide, no escape from reality
                            Open your eyes, look up to the skies and see
                            I'm just a poor boy, I need no sympathy
                            Because I'm easy come, easy go
                            Little high, little low
                            Any way the wind blows doesn't really matter to me, to me
                        </div>
                    )}
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts" onClick={() => toggleSection('time')}>{getSign('time')} Time</div>
                    {openSection.time && (
                        <div className="section-content">
                            Adequate preparation and training before engaging with the community are vital. This
                            preparation includes
                            understanding the community context, cultural sensitivity training, and acquiring specific
                            skills relevant to the
                            project (Center for Innovation in Teaching & Learning, n.d.).
                            Allocating time for students to reflect on their service activity through thinking,
                            discussing, or writing is essential. It
                            is important to collaborate with community organizations and students to create a project
                            outline, define specific
                            objectives, develop a timeline, and set both intermediate and final deadlines. Regularly
                            reviewing progress and
                            timelines with all participants helps keep the project aligned with its goals. Flexibility
                            remains a key component in
                            the effective implementation of community-based learning (Center for Innovation in Teaching
                            & Learning, n.d.).
                            16
                            Effective ComBL typically involves sustained engagement over a significant period. This
                            prolonged commitment
                            allows students to build deeper relationships with community members, understand community
                            dynamics, and
                            observe the impact of their work overtime (Bandy, 2011).
                        </div>
                    )}
                    <div className="emptyLineDropouts"></div>
                    <div className="dropouts"
                         onClick={() => toggleSection('assesment')}>{getSign('assesment')} Assessment
                    </div>
                    {openSection.assesment && (
                        <div className="section-content">
                            The recommendation of the NEA, a comprehensive approach to student assessment that involves
                            the
                            community and focuses on students' needs is essential. Educators should be well-trained in
                            assessment literacy
                            to create evaluations that inspire and reflect students' skills. Instead of relying only on
                            standardized tests, various
                            solutions should be used for making decisions. Assessments should be fair, culturally
                            relevant, and focused on
                            student growth and learning (Task Force Co-Chairs Princess Moss & Vaandering, 2022).
                            According to the article “Assessing the Implementation of Community-Based Learning in Public
                            Health: A Mixed
                            Methods Approach” (2022), the University of Lyon has applied Donald Kirkpatrick’s framework
                            model, which is
                            based on four levels, to assess the students’ satisfaction about the educational approach.
                            The model consists
                            of reaction, learning, behavior, and results, each part addressing different criteria of
                            educational program. The
                            article also describes the different levels in question: the students' overall satisfaction
                            (first level); their learning
                            outcomes (second level); changes in their work behaviors (third level); and the long-term
                            impact or results (fourth
                            level). The result of integration of the framework, resulted in a positive reaction to
                            community-based learning.
                            (Leblanc et. al., 2022).
                        </div>
                    )}
                    <div className="emptyLineDropouts"></div>
                </div>
                <div className='content-box-inner-about-footer'>

                </div>
            </div>
        </div>
    );
}

export default CBLPage;