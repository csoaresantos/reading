import React, { Component } from 'react';
import './components/App.css';
import MovieRow from './MovieRow'
import $ from 'jquery'

import {MuiThemeProvider} from "material-ui/styles/index";
import {Button, AppBar, Toolbar, Typography} from "material-ui";
import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';
import { DataTable } from './components/DataTable/DataTable';
import FirebaseService from './services/FirebaseService';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import SimpleModalWrapped from './components/AddBook'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
  }

  render() {
    return (
      <MuiThemeProvider theme={this.style}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
            <Typography type="title" color="inherit">
            Readding
            </Typography>
            </Toolbar>
          </AppBar>
          /*
          <DataTable data={this.state.data} />
          */
          <SimpleModalWrapped />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
  componentDidMount() {
    FirebaseService.getDataList('books', (retrieveData) => this.setState({data: retrieveData}));
  }
}

export default App;
