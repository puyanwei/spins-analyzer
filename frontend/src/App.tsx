import { FC } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AnalysisPage from "./Pages/AnalysisPage";
import NotFoundPage from "./Pages/NotFoundPage";

const App: FC = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/analysis" component={AnalysisPage} />
        <Route component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
