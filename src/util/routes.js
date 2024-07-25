import { ABOUT_ROUTE, HOME_ROUTE } from "./const";
import { START_ROUTE } from "./const";

import TitleScreen from "../pages/titlescreen.js";
import StartPage from "../pages/startpage.js";
import AboutPage from "../pages/aboutpage.js";

export const routes = [
    {
        path: HOME_ROUTE,
        Component: TitleScreen
    },
    {
        path: START_ROUTE,
        Component: StartPage
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutPage
    },
]; 