import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './Profile';
import Schedule from './Schedule';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Profile} />
      <Route path="/schedule" component={Schedule} />
    </Router>
  );
}

export default App;
