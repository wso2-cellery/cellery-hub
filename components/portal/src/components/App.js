/*
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import './App.css';
import 'typeface-roboto';
import AppLayout from "./appLayout";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Explore from "./explore";
import Home from "./home";
import Images from "./images";
import Orgs from "./orgs";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";

class Portal extends React.Component {

    render = () => {
        //TODO: Integrate user authentication.
        const isLoggedIn = false;
        return (
            isLoggedIn
                ? (
                    <AppLayout>
                        <Switch>
                            <Route exact path={["/", "/images"]} component={Images}/>
                            <Route exact path={"/orgs"} component={Orgs}/>
                            <Route exact path={"/explore"} component={Explore}/>
                        </Switch>
                    </AppLayout>
                )
                : <Home/>
        )
    };
}

// Create the main theme of the App
const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            light: "#E5EAEA",
            main: "#69b26d",
            contrastText: "#FFF"
        },
        secondary: {
            main: "#57595d"
        }
    }
});

/**
 * The Hub Main App.
 *
 * @returns {React.Component} App react component
 */
const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Portal/>
            </BrowserRouter>
        </MuiThemeProvider>
    );
};

export default App;
