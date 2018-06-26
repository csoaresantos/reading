import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import { TextField } from "material-ui";
import FirebaseService from '../services/FirebaseService';

const fabSyle = {
  margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submit = (event) => {
    event.preventDefault();

    const { title } = this;
    const { author } = this;
    const { overview } = this;
    const { pags } = this;
    
    FirebaseService.add('books', 
      {
        title: title,
        author: author,
        overview: overview,
        pags: pags,
      pag: 0})

        this.handleClose();
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="fab" color="primary" aria-label="add" onClick={this.handleClickOpen} style={fabSyle}>
          <AddIcon />
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
        <form onSubmit={this.submit}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                cancel
              </Typography>
              <Button type="submit" color="inherit">
                save
              </Button>
            </Toolbar>
          </AppBar>
          <React.Fragment>
          <div style={{padding: 10}}>  

              <TextField className="input-field"
                type="text"
                defaultValue={''}
                label="Title"
                required
                onChange={e => this.title = e.target.value} />


              <TextField className="input-field"
                type="text"
                label="Author"
                defaultValue={''}
                required
                onChange={e => this.author = e.target.value} />


              <TextField className="input-field"
                type="text"
                label="Overview"
                defaultValue={''}
                required
                onChange={e => this.overview = e.target.value} />


              <TextField className="input-field"
                type="text"
                label="Pags"
                defaultValue={''}
                required
                onChange={e => this.pags = e.target.value} />
            </div>
          </React.Fragment>
          </form>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);