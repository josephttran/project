import * as React from 'react';

export interface IProject {
  name: string;
  image: string;
}

export const SingleProject = (props: IProject) => {
  return (
    <div>
      <div>
        {props.name}
      </div>
      <div>
        <img src={require(`../..//asset/images/${props.image}`)} />
      </div>
    </div>
  )
};
