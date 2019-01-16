import * as React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Card from '@material-ui/core/Card';
import CardAction from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const primary = blue[200];
const secondary = blue[500];

const styles = (theme: Theme) => createStyles({
  card: {
    margin: 'auto',
    marginTop: 20,
    backgroundColor: primary,
  },
  '@media screen and (min-width: 768px)': {
    card: {
      maxWidth: 768
    }
  },
  media: {
    height: 0, 
    paddingTop: '75%'
  },
  title: {
    color: 'theme.palette.getContrastText(primary)'
  },  
  actions: {
    display: 'flex'
  },
  button: {
    margin: theme.spacing.unit,
    width: 140,
    backgroundColor: secondary,
    color: theme.palette.getContrastText(secondary)
  }
});

export interface IProject extends Partial<WithStyles<typeof styles>> {
  name: string;
  image: string;
  url?: string;
  github?: string;
}

const SingleProject = (props: IProject) => {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <a href={props.url}>
            <CardMedia
              className={classes.media}
              image={require(`../../asset/images/${props.image}`)}
            />
          </a>
        </CardActionArea>
        <CardHeader
          classes={{ title: classes.title }} 
          title={props.name} 
        />
        <CardAction className={classes.actions}>
          <Button variant='contained' href={props.url} target='_blank' className={classes.button}>
            Website
          </Button>
          <Button variant='contained' href={props.github} target='_blank' className={classes.button}>
            GitHub
          </Button>
        </CardAction>
      </Card>
    </div>
  )
};

export default withStyles(styles)(SingleProject);