import "./App.css";
import Homepage from "./Components/Homepage";
import RegisterPage from "./Components/Registerpage";
import Navigation from "./Components/Navigation";
//import { browserHistory, Router, Switch, Route } from "react-router-dom";
import { Router, Route } from 'react-router'
import "./App.css";
import Footer from "./Components/Footer";
import LoginPage from "./Components/Loginpage";
import Profile from "./Components/Profile";
import { history } from "./history";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
     
        
        <Router history={history}>
        <Navigation />
            <Route exact path="/" component={Homepage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/profile" component={Profile} />
        </Router>
      {/* </BrowserRouter> */}
      <Footer />
    </div>
  );
}

export default App;
