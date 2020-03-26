/***************************
 * Code created by Hebert Barros,
 * Under MIT license
 * https://github.com/tecnobert/stayhouse
 *****************************/

import bg from "../../assets/img/coronavirus-4914028_1920.jpg";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const bg_img = "url(" + bg + ")";
const colors = {
  $primary: grey[50],
  $secondary: "#027b50",
  $border: "1px solid " + grey[800],
  hover: {
    $primary: grey[50],
    $secondary: grey[50],
    $border: "1px solid #027b50",
    $box_shandown: "2px 2px 2px 2px #027b5165"
  }
};
const Styled = makeStyles(theme => ({
  body: {
    margin: 0,
    border: 0
  },
  svg_asset: {
    width: "36%",
    marginTop: "22px",
    marginLeft: "26.3%"
  },
  icons: {
    position: "relative",
    color: grey[50],
    width: "16px",
    height: "16px"
  },
  icons_sm: {
    position: "relative",
    color: grey[50],
    width: "12px",
    height: "12px"
  },
  App: {
    textAlign: "center"
  },
  AppHeader: {
    backgroundImage: bg_img,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: grey[50],
    fontFamily: "Ubuntu"
  },
  Nav: {
    height: 50,
    marginBottom: "175px",
    fontFamily: "Ubuntu"
  },
  h1: {
    color: grey[50]
  },

  grow: {
    flexGrow: 1
  },
  links: {
    color: grey[50],
    marginLeft: "22px",
    marginRight: "22px",
    fontFamily: "Ubuntu"
  },
  bgNav: {
    background: "linear-gradient(45deg, #ffffff48 30%, #ffffff48 90%)",
    boxShadow: "0 2px 2px 2px #ffffff48",
    color: grey[50],
    fontFamily: "Ubuntu"
  },
  posts: {
    backgroundColor: "#ffffffab",
    height: "100vh",
    marginTop: "82px",
    boxShadow: colors.hover.$box_shandown,
    borderRadius: "6px",
    padding: 16,
    color: colors.$secondary,
    fontFamily: "Ubuntu",
    fontWeight: "600"
  },
  title: {
    display: "none",
    color: grey[50],
    fontFamily: "Virus43",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  sectionDesktop: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  "@media screen and (max-width: 320px)": {
    bgNav: {
      display: "none"
    },
    AppHeader: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: grey[50]
    }
  },
  "@media screen and (max-width: 360px)": {
    bgNav: {
      display: "none"
    },
    AppHeader: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: grey[50]
    }
  },
  "@media screen and (max-width: 720px)": {
    bgNav: {
      display: "none"
    },
    AppHeader: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: grey[50]
    }
  }
}));
export default Styled;
