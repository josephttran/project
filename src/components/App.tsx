import * as React from 'react';

import { Header } from './Header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header name="Projects" />
      </div>
    )
  }
}

export default App;