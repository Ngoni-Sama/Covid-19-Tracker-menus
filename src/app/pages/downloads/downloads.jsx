import Container from "@material-ui/core/Container";
import DownloadBtn from "./downloadBtn";
import Nav from "../../shared/nav";
import React from "react";
import Styled from "../../../styles/react/styles";
import Typography from "@material-ui/core/Typography";
import { app } from "../../../assets/app.json";
import medical_research from "../../../assets/img/undraw_medical_research_qg4d.svg";

function DownloadPage() {
  const classes = Styled();

  return (
    <div className={classes.App}>
      <Nav></Nav>
      <header className={classes.AppHeader}>
        <Container maxWidth="sm">
          <Typography className={classes.posts} component="div">
            <img
              className={classes.svg_asset}
              src={medical_research}
              alt={app.NAME}
              srcset={medical_research}
            />

            <p>
              We are working to make available a version of the application for
              Android and IOS. Very soon it will be in the app stores.
            </p>

            <p>
              You can use the application in the Web version. For now it is only
              available for the Web. The mobile version for Android and IOS will
              soon be available.
            </p>
            <DownloadBtn></DownloadBtn>
          </Typography>
        </Container>
      </header>
    </div>
  );
}

export default DownloadPage;
