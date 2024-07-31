import { ABOUT_ROUTE, HOME_ROUTE, START_ROUTE, CBL_ROUTE } from "./const";
import TitleScreen from "../pages/titlescreen.js";
import StartPage from "../pages/startpage.js";
import AboutPage from "../pages/aboutpage.js";
import CBLPage from "../pages/CBLPage.js";

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
    {
        path: CBL_ROUTE,
        Component: CBLPage
    },
]; 