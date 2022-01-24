import { Switch, Route } from "react-router";
import { useState } from "react";

import "./App.css";

import Layout from "./components/UI/Layout";

import AllContractedPlayers from "./pages/AllContractedPlayers";
import AllSubPlayers from "./pages/AllSubPlayers";
import Library from "./pages/Library";
import Season2 from './pages/Season2';


function App() {
  const [modalIsClosed, setModalIsClosed] = useState(false);

  const modalCloseHandler = (flag) => {
    setModalIsClosed(flag);
  };

  return (
    <Layout modalCloseHandler={modalCloseHandler}>
      <Switch>
        <Route path={"/contracted-players"} exact>
          <AllContractedPlayers modalIsClosed={modalIsClosed} />
        </Route>

        <Route path={"/sub-players"} exact>
          <AllSubPlayers modalIsClosed={modalIsClosed} />
        </Route>

        <Route path={'/library'} exact>
          <Library modalIsClosed={modalIsClosed} />
        </Route>

        <Route path={"/season"} exact>

          <Season2 modalIsClosed={modalIsClosed} />



        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
