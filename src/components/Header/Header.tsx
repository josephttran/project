import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

export interface IHeader {
  name: string
}

export const Header = (props: IHeader) => {
  return (
    <div className='header'>
      <AppBar position='static' color='primary'>
        <Typography variant='h2' align='center' color='inherit'>
          {props.name}
        </Typography>
      </AppBar>
    </div>
  );
}

