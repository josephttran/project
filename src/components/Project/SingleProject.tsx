import * as React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardAction from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import blue from '@material-ui/core/colors/blue';
import Grid from '@material-ui/core/Grid';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

const buttonBg = blue[500];

const styles = (theme: Theme) => createStyles({
  item: {
    paddingTop: 20,
    paddingRight: 20,
    width: '100%',
    height: 'auto',
    minWidth: 270,
    [theme.breakpoints.up('sm')]: {
      maxWidth: '50%',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      maxWidth: '33%'
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '25%'
    }
  },
  card: {
    backgroundColor: theme.palette.primary.main,
    border: '2px solid #ccc'
  },
  media: {
    height: 0, 
    paddingTop: '75%'
  },
  title: {
    color: theme.palette.getContrastText(theme.palette.primary.main)
  },  
  actions: {
    display: 'flex'
  },
  button: {
    width: '40%',
    margin: theme.spacing.unit * 2,
    backgroundColor: buttonBg,
    color: theme.palette.getContrastText(buttonBg)
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
    <Grid item className={classes.item}>
      <Card className={classes.card}>
        <CardActionArea>
          <a href={props.url} target='_blank'>
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
    </Grid>
  )
};

export default withStyles(styles)(SingleProject);