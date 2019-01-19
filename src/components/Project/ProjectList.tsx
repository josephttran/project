import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';

import SingleProject, { IProject } from './SingleProject';
import projectData from '../../projectData.json';

const styles = (theme: Theme) => createStyles({
  container: {
    padding: 20,
    backgroundColor: '#222',
  }
});

interface IProjectListState {
  projects: IProject[];
}

class ProjectList extends React.Component<any, IProjectListState> {
  state: IProjectListState = {
    projects: []
  }

  componentDidMount() {
    const dat = projectData;
    const proj = [...this.state.projects, ...dat];
     
    this.setState({projects: proj});
  }

  render() {
    const { classes } = this.props;

    const proj = this.state.projects.map(ele => { 
      return (
        <SingleProject 
            key={ele.name} 
            name={ele.name} 
            image={ele.image}
            url={ele.url}
            github={ele.github}
        />
      )
    });
    
    return (
      <Grid container className={classes.container}>
        {proj}
      </Grid>
    )
  }
}

export default withStyles(styles)(ProjectList);
