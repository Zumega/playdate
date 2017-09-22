import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <section className="header">
      <h1>
        <Link to="/">Play Date</Link>
      </h1>
      {/* TODO: Do I need a menu? */}
      {/* <nav ng-if="vm.menu.length >= 1">
        <a ng-href="nav.url" ng-repeat='nav in vm.menu'>
          {{nav.text}}
        </a>
      </nav> */}
    </section>
  );
}

export default Header;