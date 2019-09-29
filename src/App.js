import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'assets/fontAwesomeIconsLibrary';
import { FormattedMessage } from 'react-intl';
import './App.scss';

//views / Pages
import Home from 'views/components/pages/Home/Home';
import Contact from 'views/components/pages/Contact/Contact';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function App() {
  return (
    <Router basename="/">
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/contact"><Contact /></Route>
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
