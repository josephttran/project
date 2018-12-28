import * as React from 'react';

import { Header } from './Header/Header';
import ProjectList from './Project/ProjectList'

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <Header name="Projects" />
        <ProjectList />
        
      </div>
    )
  }
}

export default App;