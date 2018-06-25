import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class LinearDeterminate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {completed: (Math.round((this.props.pagact/this.props.pags)*100))}
    }

    render() {
      const { classes, pagact, pags } = this.props;
      return (
        <div className={classes.root}>
          <LinearProgress variant="determinate" value={this.state.completed} />
        </div>
      );
    }
  }
  
  LinearDeterminate.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LinearDeterminate);