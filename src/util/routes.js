import * as Routes from "./const";
import TitleScreen from "../pages/titlescreen.js";
import StartPage from "../pages/startpage.js";
import AboutPage from "../pages/aboutpage.js";
import CBLPage from "../pages/CBLPage.js";
import Others from "../pages/others.js";
import CBLToolkit from "../pages/CBLToolkit.js";

export const routes = [
    {
        path: Routes.HOME_ROUTE,
        Component: TitleScreen
    },
    {
        path: Routes.START_ROUTE,
        Component: StartPage
    },
    {
        path: Routes.ABOUT_ROUTE,
        Component: AboutPage
    },
    {
        path: Routes.CBL_ROUTE,
        Component: CBLPage
    },
    {
        path: Routes.OTHER_ROUTE,
        Component: Others
    },
    {
        path: Routes.CBL_TOOLKIT,
        Component: CBLToolkit
    },
]; 