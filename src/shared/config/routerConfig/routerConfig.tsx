import { MainPageAsync } from "pages/mainPage";
import { RouteProps } from "react-router-dom";
import {PaymentPageAsync} from "pages/checkout/ui/paymentPage.Async";
import {MmrBoostAsync} from "pages/mmrBoostPage/ui/mmrBoostPage.Async";
import {LowPriority} from "widgets/lowPriority";
import {LowPriorityAsync} from "pages/lowPriorityPage";
import CalibrationPage from "pages/calibration/ui/calibrationPage";
import { CalibrationPageAsync } from "pages/calibration/ui/calibrationPage.Async";

export enum AppRoutes{
    MAIN="main",
    MMR_BOOST="mmr",
    LOW_PRIORITY="lowpriority",
    CALIBRATION="calibration",
    BEHAVIOUR="behaviour",
    PAYMENT="payment"
};

export const RoutePath:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PAYMENT]:"/payment/:orderId",
    [AppRoutes.MMR_BOOST]: '/mmr',
    [AppRoutes.LOW_PRIORITY]: '/lowpriority',
    [AppRoutes.CALIBRATION]: "/calibration",
    [AppRoutes.BEHAVIOUR]: "/behaviour",
};

export const RouterConfig:Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]:{
        path:RoutePath.main,
        element:<MainPageAsync/>
    },
    [AppRoutes.PAYMENT]:{
        path:RoutePath.payment,
        element:<PaymentPageAsync/>
    },
    [AppRoutes.MMR_BOOST]:{
        path:RoutePath.mmr,
        element:<MmrBoostAsync/>
    },
    [AppRoutes.CALIBRATION]:{
        path:RoutePath.calibration,
        element:<CalibrationPageAsync/>
    },
    [AppRoutes.BEHAVIOUR]:{
        path:RoutePath.behaviour,
        element:<></>
    },
    [AppRoutes.LOW_PRIORITY]:{
        path:RoutePath.lowpriority,
        element:<LowPriorityAsync/>
    }
};