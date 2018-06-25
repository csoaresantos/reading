import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Logo from '../reading_icon.png'
import LinearDeterminate from './LinearProgress'
/*
export const AddBook = () =>
    <div>
        <h1>Add AddBook</h1>
    </div>
*/
const styles = theme => ({
    card: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
      height: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });

class AddBook extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes, theme } = this.props;
        return (
            <div>
              <Card className={classes.card}>
              <CardMedia
                  className={classes.cover}
                  image="https://cdn.dribbble.com/users/55871/screenshots/2158022/no_photo_1x.jpg"
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant="headline">{this.props.title}</Typography>
                    <Typography variant="subheading" color="textSecondary">
                    {this.props.author}
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    <IconButton aria-label="Previous">
                      {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    {/* <IconButton aria-label="Play/pause">
                      <PlayArrowIcon className={classes.playIcon} />
                    </IconButton> */}
                    <label>{this.props.pagact}/{this.props.pags}</label>
                    <IconButton aria-label="Next">
                      {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                  </div>
                </div>
              </Card>
              <LinearDeterminate pagact={this.props.pagact} pags={this.props.pags} />
            </div>
          )
    }
}

AddBook.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(AddBook);