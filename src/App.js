import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/UI/Layout";
import { Switch, Route } from "react-router";
import AllContractedPlayers from "./pages/AllContractedPlayers";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={"/contracted-players"} exact>
          <AllContractedPlayers />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
