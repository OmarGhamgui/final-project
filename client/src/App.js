import "./App.css";
import Homepage from "./Components/Homepage";
import RegisterPage from "./Components/Registerpage";
import Navigation from "./Components/Navigation";
import { Router, Route } from "react-router";
import "./App.css";
import Footer from "./Components/Footer";
import LoginPage from "./Components/Loginpage";
import Profile from "./Components/Profile";
import { history } from "./history";
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navigation />
        <Route exact path="/" component={Homepage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={Profile} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
