import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReduxProvider from "./stateManager/stateManager";
import Balance from "./components/Balance";

function App(props: any) {
  const { Component, pageProps, userInfo } = props;

  return (
    <div className="App">
      <Balance> </Balance>
      <ReduxProvider>{/* <Component {...props} /> */}</ReduxProvider>
    </div>
  );
}

export default App;
