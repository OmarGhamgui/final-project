import "./App.css";
import Homepage from "./Components/Homepage";
import RegisterPage from "./Components/Registerpage";
import Navigation from "./Components/Navigation";
import { Router, Route } from "react-router";
import "./App.css";
import Footer from "./Components/Footer";
import LoginPage from "./Components/Loginpage";

import { history } from "./history";
import routes from "./Routes/routes";
import PrivateRoute from "./Routes/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navigation />
        <Route exact path="/" component={Homepage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        {routes.map((route, idx) => (
          <PrivateRoute
            key={idx}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}{" "}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
