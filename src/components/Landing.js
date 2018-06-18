import React, {Component} from 'react';
import MovieRow from '../MovieRow';
import Axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {open: false}
        this.init = this.init.bind(this)
        this.doSearchWithTerm = this.doSearchWithTerm.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }
    
    handleClose = () => {
        this.setState({ open: false });
    }

    doSearchWithTerm(keyword) {
        if(keyword != null) 
        {
            const items = []
            Axios.get("https://api.themoviedb.org/3/search/movie?api_key=8ed2151d71ed85b66252076ade3f09d2&query=" + (keyword)).then(
                res => {
                    res.data.results.forEach((movie) => {
                        movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path
                        items.push(<MovieRow key={movie.id} propmovie={movie} />)
                    })
                    this.setState({rows: items})
                })
        }
    }

    init(eventHandler) {
        const keyword = eventHandler.target.value
        this.doSearchWithTerm(keyword)
    }

    componentDidMount() {
        this.doSearchWithTerm('punisher')
    }

    render() {
        return (
            <div>
                <h1>Landing Page</h1>
                <Button onClick={this.handleClickOpen}>Open form dialog</Button>
                <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Book</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Fill title, author e pags number!
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                type="text"
                fullWidth
              />
              <TextField
                margin="dense"
                id="author"
                label="Author"
                type="text"
                fullWidth
              />
              <TextField
                margin="dense"
                id="notes"
                label="Notes"
                type="text"
                fullWidth
                multiline
              />
              <TextField
                margin="dense"
                id="pags"
                label="Pages"
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
                <hr />
                <input type="text" placeholder="Type your keyword" onChange={this.init.bind(this)} />
                {this.state.rows}
            </div>
        );
    }
}

export default LandingPage;
