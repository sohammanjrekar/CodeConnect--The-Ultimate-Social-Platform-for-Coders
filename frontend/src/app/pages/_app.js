import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./index";
import Login from "./login";
import Register from "./register";

function MyApp({ Component, pageProps }) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
}

export default MyApp;
