import "../../styles/css/App.css";

import { app, urls } from "../../assets/app.json";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import GitHub from "@material-ui/icons/GitHub";
import Nav from "../../shared/nav";
import React from "react";
import Styled from "../../styles/react/styles";
import Typography from "@material-ui/core/Typography";
import WhoIntBtn from '../../shared/whoInt';
import wash_hands from "../../assets/img/undraw_wash_hands_nwl2.svg";

function AboutPage() {
  const classes = Styled();

  return (
    <div className={classes.App}>
      <Nav></Nav>
      <header className={classes.AppHeader}>
        <Container maxWidth="sm">
          <Typography className={classes.posts} component="div">
            <img
              className={classes.svg_asset}
              src={wash_hands}
              alt={app.NAME}
              srcset={wash_hands}
            />

            <p>
              The "Stay House" or "Stay Home" campaign is being emphasized to
              prevent the virus from spreading. If everyone collaborates for
              sure we will have good results and we will not lose so many lives.
              That is why we ask you to do your part by staying at home and take
              due care. This alone helps to prevent the spread of the virus.
            </p>
         <WhoIntBtn></WhoIntBtn>
            <p>
              If you are a developer and want to contribute to this project, it
              is 100% open source. You can contribute on Github.
            </p>
            <Button
              variant="contained"
              color='default'
              target="_blank"
              rel="noopener noreferrer"
              href={urls.external[1]}
            >
             <GitHub></GitHub> Contribute on Github
            </Button>
          </Typography>
        </Container>
      </header>
    </div>
  );
}

export default AboutPage;
