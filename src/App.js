import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.component";
import CountryPage from "./pages/Countrypage/countrypage.component";
import HomePage from "./pages/Homepage/homepage.component";

function App() {
  return (
    <div className="App">
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/country/:countryId" component={CountryPage} />
      </Switch>
    </div>
  );
}

export default App;
