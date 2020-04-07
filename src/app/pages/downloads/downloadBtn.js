import AirplayIcon from "@material-ui/icons/Airplay";
import Button from "@material-ui/core/Button";
import React from "react";
import { urls } from "../../../assets/app.json";

//import Styled from "../../styles/react/styles";

function DownloadBtn() {
  //const classes = Styled();

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        target="_blank"
        rel="noopener noreferrer"
        href={urls.external[0]}
      >
        <AirplayIcon></AirplayIcon> Test WebApp now
      </Button>
    </>
  );
}

export default DownloadBtn;
