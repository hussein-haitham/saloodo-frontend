import { Switch, Route } from "react-router";
import "./App.css";
import Senders from "./modules/senders/pages/senders";
import Bikers from "./modules/bikers/pages/bikers";
import LoginUser from "./modules/senders/pages/loginUser";
import LoginBiker from "./modules/bikers/pages/loginBiker";

function App() {
  return (
    <div className="flex justify-center mt-8">
      <Switch>
        <Route path="/senders">
          <Senders />
        </Route>
        <Route path="/loginUser">
          <LoginUser />
        </Route>
        <Route path="/bikers">
          <Bikers />
        </Route>
        <Route path="/loginBiker">
          <LoginBiker />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
