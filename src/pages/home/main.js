import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from 'react-burger-menu';
import Navigation from './components/Navigation';
import routes from '../../data/routes';
import Scroll from './components/Scroll';
import './main.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: "reveal",
      side: "left",
      pageWrapId: "page-wrap",
      outerContainerId: "main-container"
    };
  };

  getItems() {
    const navItems = routes.map(route => {
      return (
        <Link key={route.routeIndex} tabIndex={route.index} to={route.path}>
          <i className={route.className} aria-hidden="true"/>
          <span>{route.label}</span>
        </Link>
      )
    });
    console.log(navItems);
    return navItems;
  } 

  getMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];

    return (
      <Navigation wait={20} side={this.state.side}>
        <Menu
          id={this.state.currentMenu}
          pageWrapId={this.state.pageWrapId}
          outerContainerId={this.state.outerContainerId}
          right={this.state.side === 'right'}
        >
          {this.getItems()}
        </Menu>
      </Navigation>
    );

  }

  render() {
    return (
      <div id={this.state.outerContainerId}>
        {this.getMenu()}
        <main id={this.state.pageWrapId} className={this.state.pageWrapId}>
          <Scroll/>
        </main>
      </div>
    )
  };
};

export default Home;