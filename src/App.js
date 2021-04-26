import Home from "./Components/Home";
import Game from "./Components/Game";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/start-game" component={Game} exact />
          <Route path="/new-game" component={Home} exact />
          <Redirect from="/" to="/new-game" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
