import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './Components/Intro/intro'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Intro} />
    </Switch>
  </BrowserRouter>
    );
}

export default App;