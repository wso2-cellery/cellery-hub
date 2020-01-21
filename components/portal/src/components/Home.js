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

import AppBar from "@material-ui/core/AppBar";
import BgImg from "../img/celleryOverviewBg.png";
import Button from "@material-ui/core/Button";
import CellImage from "../img/CellImage";
import CelleryLogo from "../img/celleryLogo.svg";
import CelleryOverview from "../img/celleryOverview.jpg";
import Container from "@material-ui/core/Container";
import Footer from "./appLayout/Footer";
import Grid from "@material-ui/core/Grid";
import HttpUtils from "../utils/api/httpUtils";
import Link from "@material-ui/core/Link";
import NavBar from "./appLayout/NavBar";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import * as PropTypes from "prop-types";

const styles = (theme) => ({
    root: {
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column"
    },
    mainContent: {
        flex: 1
    },
    topHeaderLine: {
        backgroundColor: theme.palette.primary.main,
        height: 10,
        width: "100%"
    },
    appbar: {
        backgroundColor: "#ffffff",
        color: theme.palette.primary.main,
        boxShadow: "none"
    },
    title: {
        flexGrow: 1
    },
    headerSubTitle: {
        display: "flex",
        alignItems: "center",
        height: 64
    },
    logo: {
        paddingTop: theme.spacing(4),
        fontSize: 48,
        fontWeight: 400,
        color: "#43AB00"
    },
    celleryLogo: {
        height: 60,
        verticalAlign: "middle",
        paddingRight: 2
    },
    toolbar: {
        paddingLeft: 0,
        paddingRight: 0,
        justifyContent: "flex-end"
    },
    summary: {
        fontSize: 32,
        paddingTop: theme.spacing(4),
        fontWeight: 200
    },
    headerSubTitleContent: {
        fontWeight: 300
    },
    description: {
        fontSize: 18,
        fontWeight: 300
    },
    desContainer: {
        marginTop: theme.spacing(4)
    },
    bgImg: {
        backgroundImage: `url(${BgImg})`,
        backgroundColor: "#ffffff",
        height: 100,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center"
    },
    celleryOverview: {
        backgroundImage: `url(${CelleryOverview})`,
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom right"
    },
    loginText: {
        paddingTop: theme.spacing(4),
        fontSize: 16
    },
    leftIcon: {
        marginRight: theme.spacing(1)
    },
    button: {
        borderColor: theme.palette.primary.main,
        textTransform: "none"
    },
    link: {
        color: theme.palette.primary.main
    },
    signInContent: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(5)
    },
    connector: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    imageIcon: {
        color: theme.palette.primary.main,
        marginRight: theme.spacing(1 / 2),
        fontSize: 16,
        verticalAlign: "text-bottom"
    },
    banner: {
        border: "1px solid #69b26d",
        padding: 10,
        background: "#e5eaea",
        textAlign: "justify",
        textJustify: "inter-word",
        marginTop: 20
    },
    bannerText: {
        fontSize: 14,
        lineHeight: 1.8
    },
    celleryText: {
        paddingTop: 10,
        paddingBottom: 10
    },
    celleryLink: {
        color: "#69b26d",
        textDecoration: "none",
        "&:hover, &:focus, &:active": {
            color: "#69b26d",
            textDecoration: "none"
        }
    }
});

class Home extends React.Component {

    /**
     * Handle sign-in to Cellery Hub.
     */
    handleSignIn = () => {
        const {history, location} = this.props;
        const search = HttpUtils.generateQueryParamString({
            callback: location.pathname + location.search
        });
        history.push(`/sign-in${search}`);
    };

    render = () => {
        const {classes} = this.props;

        return <React.Fragment>
            <div className={classes.root}>
                <div className={classes.mainContent}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={6}/>
                        <Grid item xs={12} sm={6} md={6}>
                            <div className={classes.topHeaderLine}/>
                        </Grid>
                    </Grid>
                    <Container maxWidth={"md"}>
                        <Grid container>
                            <Grid item xs={8} sm={6} md={6}>
                                <div className={classes.headerSubTitle}>
                                    <Typography className={classes.headerSubTitleContent}>
                                        A WSO2 Open Source Project
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={4} sm={6} md={6}>
                                <AppBar position={"static"} className={classes.appbar}>
                                    <Toolbar className={classes.toolbar}>
                                        <NavBar/>
                                    </Toolbar>
                                </AppBar>
                            </Grid>
                        </Grid>
                        <div className={classes.logo}>
                            <img src={CelleryLogo} className={classes.celleryLogo} alt={"Cellery logo"}/>
                            hub
                        </div>
                        <div className={classes.banner}>
                            <div className={classes.celleryMsg}>
                                <div className={classes.celleryText}>
                                    Cellery started off as a learning experiment. Our passion for services composition
                                    and the need for a reference
                                    implementation for <Link
                                        href={"https://github.com/wso2/reference-architecture/blob/master/reference-"
                                    + "architecture-cell-based.md"} target={"_blank"} className={classes.celleryLink}>
                                    Cell-based architecture</Link> gave birth to Cellery. Last year and half was a great
                                    learning experience for us. Through Cellery, we learnt to organize services and
                                    deploy on Kubernetes at scale. We also found out that this is a common problem that
                                    many technical communities are trying to solve and we are planning to contribute to
                                    <Link href={"https://oam.dev/"} target={"_blank"} className={classes.celleryLink}>
                                        such communities
                                    </Link> in future. As for Cellery, we are no longer actively maintaining the
                                    codebase. If you are interested in forking Cellery and using it in your project,
                                    please feel free to do so.
                                </div>
                                <div className={classes.celleryText}>You can navigate to the code base at -
                                    <Link target={"_blank"} href={"https://github.com/wso2/cellery"}
                                        className={classes.celleryLink}>https://github.com/wso2/cellery
                                    </Link>.
                                </div>
                            </div>
                        </div>
                        <Grid container className={classes.desContainer}>
                            <Grid item xs={12} sm={8} md={8}>
                                <Typography gutterBottom className={classes.description}>
                                    Cellery hub acts as a central repository to store and maintain Cell images which
                                    can be shared with other users. Users with neccessary permissions can pull, push
                                    images and manage users and organizations.
                                </Typography>
                                <div className={classes.signInContent}>
                                    <Button variant={"outlined"} color={"inherit"} className={classes.button}
                                        onClick={this.handleSignIn}>
                                        Sign In/ Sign Up
                                    </Button>
                                </div>
                                <div>
                                    <Typography variant={"subtitle2"}>
                                        <Link href={"/explore"} color={"inherit"} className={classes.link}>
                                            <CellImage className={classes.imageIcon}/>Popular Cell Images
                                        </Link>
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <div className={classes.celleryOverview}/>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div className={classes.bgImg}/>
                <Footer/>
            </div>
        </React.Fragment>;
    };

}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string.isRequired
    }).isRequired
};

export default withStyles(styles)(Home);

