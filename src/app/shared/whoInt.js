import Button from "@material-ui/core/Button";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import React from "react";
import { urls } from "../../assets/app.json";

//import Styled from "../../styles/react/styles";

function WhoIntBtn() {
  //const classes = Styled();

  return (
    <Button
      variant="contained"
      color="primary"
      target="_blank"
      rel="noopener noreferrer"
      href={urls.external[2]}
    >
      <LiveHelpIcon></LiveHelpIcon> Read more in who.int
    </Button>
  );
}

export default WhoIntBtn;
