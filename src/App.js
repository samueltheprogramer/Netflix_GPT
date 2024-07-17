import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./redux/store";
//use this for redu toolkit setup
function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
