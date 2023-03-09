import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quote from "./components/Quote";
import About from "./components/About";
import ContactUs from "./components/ContactUs"
import Header from "./components/Header";

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      <Quote />
    </Router>
  );
}

export default App;
