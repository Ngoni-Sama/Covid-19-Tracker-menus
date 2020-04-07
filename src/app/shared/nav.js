/***************************
 * Code created by Hebert Barros,
 * Under MIT license
 * https://github.com/tecnobert/stayhouse
 *****************************/

import { app, urls } from "../../assets/app.json";

import AppBar from "@material-ui/core/AppBar";
import CloudDownload from "@material-ui/icons/CloudDownload";
import Divider from "@material-ui/core/Divider";
import ExtensionSharp from "@material-ui/icons/ExtensionSharp";
import GitHub from "@material-ui/icons/GitHub";
import House from "@material-ui/icons/House";
import Link from "@material-ui/core/Link";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import React from "react";
import Styled from "../../styles/react/styles";
import Toolbar from "@material-ui/core/Toolbar";
import TranslateSharp from "@material-ui/icons/TranslateSharp";
import Typography from "@material-ui/core/Typography";

export default function Nav() {
  const classes = Styled();
  function toHome() {
    window.location.href = urls.routes[0];
  }
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.bgNav}>
        <Toolbar>
          <Typography
            onClick={toHome}
            className={classes.title}
            variant="h4"
            noWrap
          >
            {app.NAME}
          </Typography>
          <div className={classes.grow} />
          <Link href={urls.routes[0]} className={classes.links}>
            <House className={classes.icons}></House> Home{" "}
            
          </Link>
          <Link href={urls.external[0]} className={classes.links}>
            <ExtensionSharp className={classes.icons}></ExtensionSharp> Web
            Aplication{" "}
            <OpenInNewIcon className={classes.icons_sm}></OpenInNewIcon>
          </Link>
          <Divider></Divider>
          <Link href={urls.routes[2]} className={classes.links}>
            <CloudDownload className={classes.icons}></CloudDownload> Downloads
          </Link>
          <Divider></Divider>
          <Link href={urls.external[3]} className={classes.links}>
            <TranslateSharp className={classes.icons}></TranslateSharp> PT-BR
          </Link>
          <Divider></Divider>
          <Link href={urls.external[1]} className={classes.links}>
            <GitHub className={classes.icons}></GitHub> Repo{" "}
            <OpenInNewIcon className={classes.icons_sm}></OpenInNewIcon>
          </Link>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Link href={urls.routes[1]} className={classes.links}>
              About
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <Link href={urls.routes[0]} className={classes.links}>
              {app.NAME}
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      <div className={classes.root}></div>
    </div>
  );
}
