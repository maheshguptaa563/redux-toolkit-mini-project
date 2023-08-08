import "./App.css";
import CakeView from "./features/cake/Cakeview";
import IcecreamView from "./features/cake/icecream/icecreamView";
import UserView from "./features/cake/user/UserView";

function App() {
  return (
    <div>
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
