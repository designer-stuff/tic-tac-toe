import { useState } from "react";
import { Grid } from "@material-ui/core";
import Input from "./Input";
import Button from "./Button";

import vsLogo from "../assets/Logo.svg";
import "./style/home.css";
import { useHistory } from "react-router";

function Home() {
  const initialState = {
    player1: { name: "", weapon: "X", score: 0 },
    player2: { name: "", weapon: "O", score: 0 },
  };

  const [state, setState] = useState(initialState);
  const history = useHistory();

  const handleGameStart = () => {
    // check if player data is already there in localStorage
    const ls = window.localStorage;

    const localStorageStatus = ls.getItem("Data");
    if (localStorageStatus) ls.removeItem("Data");

    // set localStorage value
    const playersData = { ...state };
    if (playersData.player1.name && playersData.player2.name) {
      ls.setItem("Data", JSON.stringify(state));
      history.push("/start-game");
      return;
    }

    alert("Please enter both player names before proceeding");
  };

  const handlePlayerNameChange = (event) => {
    const newState = { ...state };
    newState[event.target.name].name = event.target.value;
    setState(newState);
  };

  const { player1, player2 } = state;

  return (
    <div style={{ flex: 1, padding: "1rem", overflow: "hidden" }}>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          container
          xs={12}
          spacing={3}
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} sm={3} zeroMinWidth>
            <Input
              name="player1"
              value={player1.name}
              weapon={player1.weapon}
              onPlayerNameChange={handlePlayerNameChange}
            />
          </Grid>
          <Grid item xs={5} sm={2} zeroMinWidth>
            <img src={vsLogo} alt="versus" className="vs-logo" />
          </Grid>
          <Grid item xs={12} sm={3} zeroMinWidth>
            <Input
              name="player2"
              value={player2.name}
              weapon={player2.weapon}
              onPlayerNameChange={handlePlayerNameChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Button text="Start Game" onGameStart={handleGameStart} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
