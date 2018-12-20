import * as React from 'react';

export interface IHeader {
  name: string
}

export const Header = (props: IHeader) => {
  return (
    <div className='header'>
      <span>{props.name}</span>
    </div>
  );
}

