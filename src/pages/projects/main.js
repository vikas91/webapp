import Home from '../home/main';
import React from 'react';

class Projects extends Home {
  render() {
    return (
      <div id={this.state.outerContainerId}>
        {this.getMenu()}
        <main class="page-wrap">
          < h1>
            <a href="https://github.com/negomi/react-burger-menu">
              This is projects page
            </a>
          </h1>
        </main>
      </div>
    )
  };

}

export default Projects;