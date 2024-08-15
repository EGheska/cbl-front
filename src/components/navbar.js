import React, {useEffect} from "react";
import "../styles/navbar.css";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import * as Routes from "../util/const.js";

const NavBar = () => {

    /*
    @hook used for conditionally render the links for the questionaire.
     */
    // const [additionalItems, setAdditionalItems] = useState([]);
    const [isNavbarFromQuestion, setIsNavbarFromQuestion] = useState(false);
    const navigate = useNavigate();


    const [isVisible, setIsVisible] = useState({
        spiderweb: false,
        combl: false,
        others: false,
        learning: false,
        aims: false,
        content: false,
        activities: false,
        role: false,
        resources: false,
        grouping: false,
        location: false,
        time: false,
        assessment: false,
    });
    const location = useLocation();

        useEffect(() => {
            const resetVisibility = {
                learning: false,
                aims: false,
                content: false,
                activities: false,
                role: false,
                resources: false,
                grouping: false,
                location: false,
                time: false,
                assessment: false,
                spiderweb: false,
                combl: false,
                others: false,
            };
            setIsVisible(resetVisibility);

            const pathMap = {
                [Routes.CBL_TOOLKIT]: "cbl-toolkit",
                [Routes.LEARNING]: "learning",
                [Routes.AIMS]: "aims",
                [Routes.CONTENT]: "content",
                [Routes.ACTIVITIES]: "activities",
                [Routes.ROLE]: "role",
                [Routes.RESOURCES]: "resources",
                [Routes.GROUP]: "grouping",
                [Routes.LOCATION]: "location",
                [Routes.TIME]: "time",
                [Routes.ASSESSMENT]: "assessment",
                "/cbl": "combl",
                "/about": "spiderweb",
                "/cbl-in-others": "others",
            };

            const currentSection = pathMap[location.pathname];
            if (currentSection) {
                setIsVisible(prevState => ({ ...prevState, [currentSection]: true }));
            }

            setIsNavbarFromQuestion(Object.keys(pathMap).slice(0, 11).includes(location.pathname));
        }, [location]);


        const handleClick = (route) => {
        navigate(route);
    }

    // if (location.pathname === "/cbl") {
    //     setIsVisible(prevState => ({
    //         ...prevState,
    //         combl: true,
    //         spiderweb: false,
    //         others: false,
    //     }));
    //
    // } else if (location.pathname === "/cbl-toolkit/learning" || location.pathname === "/cbl-toolkit") {
    //     setIsNavbarFromQuestion(true);
    //     setIsVisible(prevState => ({
    //         ...prevState,
    //         learning: true,
    //     }));
    // } else if (location.pathname === "/cbl-toolkit/aims") {
    //     setIsNavbarFromQuestion(true);
    //     setIsVisible(prevState => ({
    //         ...prevState,
    //         aims: true,
    //     }));
    // } else if (location.pathname === "/cbl-toolkit/content") {
    //     setIsNavbarFromQuestion(true);
    //     setIsVisible(prevState => ({
    //         ...prevState,
    //         content: true,
    //     }));
    // } else if (location.pathname === "/cbl-toolkit/activities") {
    //     setIsNavbarFromQuestion(true);
    //     setIsVisible(prevState => ({
    //         ...prevState,
    //         activities: true,
    //     }));
    // } else if (location.pathname === "/cbl-toolkit/role") {
    //     setIsNavbarFromQuestion(true);
    //     setIsVisible(prevState => ({
    //         ...prevState,
    //         role: true,
    //     }));
    // } else if (location.pathname === "/cbl-toolkit/resources") {
    //     setIsNavbarFromQuestion(true);
    //     setIsVisible(prevState => ({
    //         ...prevState,
    //         resources: true,
    //     }));
    // } else if (location.pathname === "/cbl-toolkit/group") {
    //     setIsNavbarFromQuestion(true);
    //     setIsVisible(prevState => ({
    //         ...prevState,
    //         grouping: true,
    //     }));
    // } else if (location.pathname === "/cbl-toolkit/location") {
    //     setIsNavbarFromQuestion(true);
    //     setIsVisible(prevState => ({
    //         ...prevState,
    //         location: true,
    //     }));
    // } else if (location.pathname === "/cbl-toolkit/time") {
    //     setIsNavbarFromQuestion(true);
    //     setIsVisible(prevState => ({
    //         ...prevState,
    //         time: true,
    //     }));
    // } else if (location.pathname === "/cbl-toolkit/assessment") {
    //     setIsNavbarFromQuestion(true);
    //     setIsVisible(prevState => ({
    //         ...prevState,
    //         assessment: true,
    //     }));
    // } else if (location.pathname === "/about") {
    //     setIsVisible(prevState => ({
    //         ...prevState,
    //         combl: false,
    //         spiderweb: true,
    //         others: false,
    //     }));
    // } else if (location.pathname === "/cbl-in-others") {
    //     setIsVisible(prevState => ({
    //         ...prevState,
    //         combl: false,
    //         spiderweb: false,
    //         others: true,
    //     }));
    // } else {
    //     setIsVisible({
    //         spiderweb: false,
    //         others: false,
    //         combl: false,
    //     });
// }
// },
// [location]
// )
// ;

// useEffect(() => {
//     const itemsToShow = new Set(additionalItems.map(item => item.name));
//     additionalBarItems.forEach((item) => {
//         if (item.type === "cbl" && location.pathname === "/cbl") {
//             itemsToShow.add("Community-Based Learning");
//         }
//         if (item.type === "about" && location.pathname === "/about") {
//             itemsToShow.add("Spiderweb Framework");
//         }
//     });
//
//     const updatedItems = Array.from(itemsToShow).map((name, index) => ({
//         id: index,
//         name: name
//     }));
//
//     setAdditionalItems(updatedItems);
// }, [additionalBarItems, location.pathname]);

return (
    <div className="navbar">
        <nav className="navbar-bar">
            <div className="about-div">
                <img src="/Assets/UTLogo/logo_navbar.png" alt="UTLogo"/>
            </div>
            <div className="line-div">
            </div>

            {/*TODO: Rewrite the code by dividing the items to components*/}

            {isNavbarFromQuestion ? (
                <div className="additional-div">
                    <div className="items-list">
                        <div className="item">
                            {isVisible.learning ? (
                                <span className="navbar-span">&#x2022;</span>
                            ) : (
                                <span className="navbar-span">&#x25E6;</span>
                            )}
                            <a href={Routes.LEARNING}>Learning</a>
                        </div>
                        <div className="item">
                            {isVisible.aims ? (
                                <span className="navbar-span">&#x2022;</span>
                            ) : (
                                <span className="navbar-span">&#x25E6;</span>
                            )}
                            <a href={Routes.AIMS}>Aims & Objectives</a>
                        </div>
                        <div className="item">
                            {isVisible.content ? (
                                <span className="navbar-span">&#x2022;</span>
                            ) : (
                                <span className="navbar-span">&#x25E6;</span>
                            )}
                            <a href={Routes.CONTENT}>Content</a>
                        </div>
                        <div className="item">
                            {isVisible.activities ? (
                                <span className="navbar-span">&#x2022;</span>
                            ) : (
                                <span className="navbar-span">&#x25E6;</span>
                            )}
                            <a href={Routes.ACTIVITIES}>Learning Activities</a>
                        </div>
                        <div className="item">
                            {isVisible.role ? (
                                <span className="navbar-span">&#x2022;</span>
                            ) : (
                                <span className="navbar-span">&#x25E6;</span>
                            )}
                            <a href={Routes.ROLE}>Teaching Role</a>
                        </div>
                        <div className="item">
                            {isVisible.resources ? (
                                <span className="navbar-span">&#x2022;</span>
                            ) : (
                                <span className="navbar-span">&#x25E6;</span>
                            )}
                            <a href={Routes.RESOURCES}>Materials & Resources</a>
                        </div>
                        <div className="item">
                            {isVisible.grouping ? (
                                <span className="navbar-span">&#x2022;</span>
                            ) : (
                                <span className="navbar-span">&#x25E6;</span>
                            )}
                            <a href={Routes.GROUP}>Grouping</a>
                        </div>
                        <div className="item">
                            {isVisible.location ? (
                                <span className="navbar-span">&#x2022;</span>
                            ) : (
                                <span className="navbar-span">&#x25E6;</span>
                            )}
                            <a href={Routes.LOCATION}>Location</a>
                        </div>
                        <div className="item">
                            {isVisible.time ? (
                                <span className="navbar-span">&#x2022;</span>
                            ) : (
                                <span className="navbar-span">&#x25E6;</span>
                            )}
                            <a href={Routes.TIME}>Time</a>
                        </div>
                        <div className="item">
                            {isVisible.assessment ? (
                                <span className="navbar-span">&#x2022;</span>
                            ) : (
                                <span className="navbar-span">&#x25E6;</span>
                            )}
                            <a href={Routes.ASSESSMENT}>Assesment</a>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="additional-div">
                    <div className="items-list">
                        <div className="item">
                            {isVisible.spiderweb && (
                                <span className="navbar-span">&#x2022;</span>
                            )}
                            {!isVisible.spiderweb && (
                                <span className="navbar-span">&#x25E6;</span>
                            )}
                            <a href={"/about"}>
                                Spiderweb Framework
                            </a>
                        </div>
                        <div className="item">
                            {isVisible.combl && (
                                <span className="navbar-span">&#x2022;</span>
                            )}
                            {!isVisible.combl && (
                                <span className="navbar-span">&#x25E6;</span>
                            )}
                            <a href={"/cbl"}>
                                Community-Based Learning
                            </a>
                        </div>
                        <div className="item">
                            {isVisible.others && (
                                <span className="navbar-span">&#x2022;</span>
                            )}
                            {!isVisible.others && (
                                <span className="navbar-span">&#x25E6;</span>
                            )}
                            <a style={{color: "white", textDecoration: 'none'}} href={"/cbl-in-others"}>
                                ComBL in Other Universities
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/*{additionalItems.length > 0 && (*/}
            {/*    <div className="additional-div">*/}
            {/*        */}
            {/*        {additionalItems.map((item) => (*/}
            {/*            <li className="items-list">*/}
            {/*                <a style={{ */}
            {/*                    color: "white", textDecoration: 'none'*/}
            {/*                }} */}
            {/*                href={*/}
            {/*                    item.name === "Community-Based Learning" ? "#" : "/about"*/}
            {/*                }>*/}
            {/*                <span style={{fontSize: '20px'}}>&#x25E6;</span> {item.name}*/}
            {/*                </a>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*        */}
            {/*    </div>*/}
            {/*)}*/}
        </nav>
        <div className="navbar-footer">
            UT ComBL Toolkit
            {/*<img src="/Assets/UTLogo/logo_navbar.png" alt="UTLogo"/>*/}
        </div>
    </div>
);
}
;

export default NavBar;
