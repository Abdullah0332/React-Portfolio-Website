import React from 'react';
import HeaderWrapper from './components/Common/Header/HeaderWrapper';
import Home from './components/Page/Home';
import About from './components/Page/About';
import Services from './components/Page/Services';
import Portfolio from './components/Page/Portfolio';
import Team from './components/Page/Team';
import Contact from './components/Common/Contact/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <HeaderWrapper>
          <Route exact={true} path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/team' component={Team} />
          <Route path='/contact' component={Contact} />
        </HeaderWrapper>
      </Router>
  );
}

export default App;
