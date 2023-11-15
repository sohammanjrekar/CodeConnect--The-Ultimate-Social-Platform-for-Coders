import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./index";
import Login from "./login";
import Register from "./register";

function MyApp({ Component, pageProps }) {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* Other routes */}
        
      </Switch>
    </BrowserRouter>
  );
}

export default MyApp;
