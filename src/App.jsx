import React, { useState } from "react";
// import GetFromRedux from "./components/GetFromRedux";
import HooksCake from './components/HooksCake'
import IceCream from "./components/iceCream";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <main className="App">
        {/* <GetFromRedux /> */}
        <HooksCake />
        <IceCream />
      </main>
    </Provider>
  );
}

export default App;
