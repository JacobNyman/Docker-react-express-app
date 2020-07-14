import React from "react";
import { Provider } from "react-redux";
import StartScreen from "./components/StartScreen";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  );
}

export default App;
