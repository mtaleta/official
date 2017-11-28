import React from 'react';
// import package
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'ress/dist/ress.min.css'; // 重構css,避免不同瀏覽器跑版
import 'font-awesome/css/font-awesome.min.css'

// import relative path
import Home from './Home';
import NotFound from './NotFound';

const Main = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Main;
