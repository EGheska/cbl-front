import { HOME_ROUTE } from "./const";
import { ABOUT_ROUTE } from "./const";

import TitleScreen from "../pages/titlescreen.js";
import StartPage from "../pages/startpage.js";


export const routes = [
    {
        path: HOME_ROUTE,
        Component: TitleScreen
    },
    {
        path: ABOUT_ROUTE,
        Component: StartPage
    },
]; 