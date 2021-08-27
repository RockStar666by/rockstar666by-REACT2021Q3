import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Animations.css';
import s from './Router.module.css';
import About from '../About/About.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import Details from '../Details/Details.jsx';

function AnimationApp() {
  const location = useLocation();

  return (
    <TransitionGroup className={s.container}>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route exact path="/">
            <SearchBar />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

const Header = () => {
  return (
    <Router>
      <header className={s.header}>
        <nav>
          <ul className={s.list}>
            <li>
              <NavLink className={s.headerButton} activeClassName={s.selected} exact={true} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={s.headerButton} activeClassName={s.selected} to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <AnimationApp />
    </Router>
  );
};

export default Header;
