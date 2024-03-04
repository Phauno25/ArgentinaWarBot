import { Provider } from "react-redux";
import store from "./store/store";
import Main from "./components/layout/Main";
import io from "socket.io-client";

const socket = io("/");

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
