import { Switch, Route } from "react-router";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import useRequestMapping from "./hooks/useRequestMapping";

import { authActions } from "./redux/Auth";
import { instsActions } from "./redux/Insts";

import "./App.css";

import ReloadFlagStore from "./store/reload-flag-store";
import WhichServer from "./components/helperFunctions/WhichServer";

import Layout from "./components/UI/Layout";

import AllContractedPlayers from "./pages/AllContractedPlayers";
import AllSubPlayers from "./pages/AllSubPlayers";
import Library from "./pages/Library";
import Season2 from "./pages/Season2";
import Log from "./pages/Log";
import InstsPage from "./pages/InstsPage";

function App() {
  const [modalIsClosed, setModalIsClosed] = useState(false);
  const [reloadFlag, setReloadFlag] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const whichServer = WhichServer();
  const requester = useRequestMapping();

  useEffect(() => {
    const login = async () => {
      const userDeets = { username: "manager@Email", password: "managerPass" };

      const response = await fetch(whichServer + "login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDeets),
      });
      if (response.ok) {
        const jwtToken = response.headers.get("Authorization");
        dispatch(authActions.login({ jwtToken }));
      } else {
        console.log("no login accepted");
      }
    };

    login();
  }, []);

  useEffect(() => {
    const getAllInsts = async () => {
      const allInsts = await requester("get-all-instruments");
      dispatch(instsActions.refresh(allInsts));
      setReloadFlag(false);
    };
    if (isLoggedIn) {
      getAllInsts();
    }
  }, [isLoggedIn]);

  const modalCloseHandler = (flag) => {
    setModalIsClosed(flag);
    setReloadFlag(true);
  };

  return (
    <ReloadFlagStore.Provider value={{ reloadFlag, setReloadFlag }}>
      <Layout modalCloseHandler={modalCloseHandler}>
        <Switch>
          <Route path={"/contracted-players"} exact>
            <AllContractedPlayers modalIsClosed={modalIsClosed} />
          </Route>

          <Route path={"/sub-players"} exact>
            <AllSubPlayers modalIsClosed={modalIsClosed} />
          </Route>

          <Route path={"/library"} exact>
            <Library modalIsClosed={modalIsClosed} />
          </Route>

          <Route path={"/season"} exact>
            <Season2 modalIsClosed={modalIsClosed} />
          </Route>

          <Route path={"/log"} exact>
            <Log />
          </Route>

          <Route path={"/instruments"} exact>
            <InstsPage />
          </Route>
        </Switch>
      </Layout>
    </ReloadFlagStore.Provider>
  );
}

export default App;
