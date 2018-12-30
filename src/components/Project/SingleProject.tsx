import * as React from 'react';

export interface IProject {
  name: string;
  image: string;
  url?: string;
  github?: string;
}

export const SingleProject = (props: IProject) => {
  return (
    <div>
      <div>
        {props.name}
      </div>
      <div>
        <img src={require(`../../asset/images/${props.image}`)} />
      </div>
      <div>
        <a href={props.url}>Website</a>
      </div>
      <div>
        <a href={props.github}>GitHub</a>
      </div>
    </div>
  )
};
