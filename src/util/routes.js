import { HOME_ROUTE } from "./const";
import { ABOUT_ROUTE } from "./const";

import TitleScreen from "../pages/titlescreen";
import StartPage from "../pages/startpage";


export const routes = [
    {
        path: HOME_ROUTE,
        component: TitleScreen
    },
    {
        path: ABOUT_ROUTE,
        component: StartPage
    },
]; 