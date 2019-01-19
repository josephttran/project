import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import { Header } from './Header/Header';
import ProjectList from './Project/ProjectList'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[200],
      contrastText: '#fff'
    },
    secondary: {
      main: '#fff',
      contrastText: blue[500]
    },
  },
})

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <MuiThemeProvider theme={theme}>
          <Header name="Projects" />
          <ProjectList />   
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;