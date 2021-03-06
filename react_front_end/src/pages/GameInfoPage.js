import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import AppTitle from "./components/AppTitle";
import Footer from "./components/Footer";
import GameInfo from "./components/GameInfo";
import GameInfoButtonOptions from "./components/GameInfoButtonOptions";

const GameInfoPage = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.background,
      color: "white",
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      marginTop: "4em",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <section className={classes.root} data-testid="Game Info Page">
        <AppTitle />
        <GameInfo />
        <GameInfoButtonOptions />
        <Footer />
      </section>
    </>
  );
};

export default GameInfoPage;
