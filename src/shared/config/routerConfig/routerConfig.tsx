import { RouteProps } from "react-router-dom";

export enum AppRoutes{
    MAIN="main",
    MMR_BOOST="mmr",
    LOW_PRIORITY="lowpriority",
    CALIBRATION="calibration",
    BEHAVIOUR="behaviour"
};

export const RoutePath:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.MMR_BOOST]: '/mmr',
    [AppRoutes.LOW_PRIORITY]: '/lowpriority',
    [AppRoutes.CALIBRATION]: "/calibration",
    [AppRoutes.BEHAVIOUR]: "/behaviour",
};

export const RouterConfig:Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]:{
        path:RoutePath.main,
        element:<>sosat</>
    },
    [AppRoutes.MMR_BOOST]:{
        path:RoutePath.mmr,
        element:<>lezhat</>
    },
    [AppRoutes.CALIBRATION]:{
        path:RoutePath.calibration,
        element:<></>
    },
    [AppRoutes.BEHAVIOUR]:{
        path:RoutePath.behaviour,
        element:<></>
    },
    [AppRoutes.LOW_PRIORITY]:{
        path:RoutePath.lowpriority,
        element:<></>
    }
};