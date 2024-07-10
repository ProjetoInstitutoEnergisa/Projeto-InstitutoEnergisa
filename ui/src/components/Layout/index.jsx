import React from "react";

import { Grid } from "./styles";

import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";
import { ToastContainer } from "react-toastify";


const Layout = ({children}) => { 
    return (
        <Grid>
            <ToastContainer />
            <MainHeader />
            <Aside />
            <Content>
                {children}
            </Content>
        </Grid>
    );
}

export default Layout;