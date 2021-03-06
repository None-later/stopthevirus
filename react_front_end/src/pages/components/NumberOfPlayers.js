import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { AppContext } from "../../App";

const useStyles = makeStyles((theme) => ({
  title: {
    width: "100vw",
    height: "10vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    fontSize: "1em",
  },
}));

export const NumberOfPlayers = () => {
  const classes = useStyles();

  const { gameInfo } = useContext(AppContext);

  return (
    <Typography
      variant="h3"
      component="h4"
      gutterBottom
      className={classes.title}
    >
      <p>
        <span style={{ fontWeight: "bold" }}>Players</span>:{" "}
        {`${gameInfo.count_players}`}
      </p>
    </Typography>
  );
};
