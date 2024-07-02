import React from "react";
import App from "./app.routes";

import { useAuth } from "../hooks/useAuth";
import AppRoutes from "./app.routes";

const Routes = () => {

    const { logged } = useAuth();
        { logged ? <App/> : <AppRoutes /> }
};

export default Routes;
