import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/route';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Navigation = () =>
    <div>
        <ul>
            <li><Link to={routes.HOME}>Home</Link></li>
            <li><Link to={routes.ADD}>Add</Link></li>
        </ul>
    </div>
/*
class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: 0}
        this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
      return (
        <Paper>
          <Tabs
            value={this.state.value}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleChange}
          >
            <Tab label="Lendo" />
            <Tab label="Lindos" />
            <Tab label="Vou ler" />
          </Tabs>
        </Paper>
      );
    }
  }
*/
export default Navigation;