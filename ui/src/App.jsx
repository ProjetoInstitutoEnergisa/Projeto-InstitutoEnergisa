import React from "react";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

const App = () => {
    return (
        <>
        <GlobalStyles />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </>
    );
};

export default App;