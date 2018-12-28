import * as React from 'react';

import { IProject, SingleProject } from './SingleProject';
import projectData from '../../projectData.json';

interface IProjectListState {
  projects: IProject[];
}

class ProjectList extends React.Component<{}, IProjectListState> {

  state: IProjectListState = {
    projects: []
  }

  componentDidMount() {
    const dat = projectData;
    const proj = [...this.state.projects, ...dat];
     
    this.setState({projects: proj});
  }

  render() {
    console.log(this.state.projects);    
    const proj = this.state.projects.map(ele => { 
      return (
        <SingleProject 
            key={ele.name} 
            name={ele.name} 
            image={ele.image}
        />
      )
    });
    
    return (
      <div className="Projects">
        {proj}
      </div>
    )
  }
}

export default ProjectList
