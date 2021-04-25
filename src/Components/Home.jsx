import { Grid } from "@material-ui/core";
import Input from "./Input";
import Button from "./Button";

import vsLogo from "../assets/Logo.svg";
import "./style/home.css";

function Home() {
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
            <Input weapon="X" />
          </Grid>
          <Grid item xs={5} sm={2} zeroMinWidth>
            <img src={vsLogo} alt="versus" className="vs-logo" />
          </Grid>
          <Grid item xs={12} sm={3} zeroMinWidth>
            <Input placeholder="Player 2 Name" weapon="O" />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button text="Start Game" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
