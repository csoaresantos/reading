import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
//exemplo de chamada da api com minha chave
//https://api.themoviedb.org/3/movie/550?api_key=8ed2151d71ed85b66252076ade3f09d2
    this.state = {}
  }

  initilizeSearch(keyWord) {
    const urlDataSource = "https://api.themoviedb.org/3/search/movie?api_key=8ed2151d71ed85b66252076ade3f09d2&query=" + keyWord
    const movies = []

    $.ajax({
      url: urlDataSource,
      success: (searchResult) => {
        searchResult.results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path
          movies.push(<MovieRow key={movie.id} propmovie={movie} />)
        });
        this.setState({rows: movies})
      },
      error: (xhr, status, err) => {
        console.error("fail")
      }
    })
  }

handleEventChange(event) {
  const boundContext = this
  boundContext.initilizeSearch(event.target.value)
}

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td> <img width="50" alt="Logo" src="reading_icon.png" /> </td>
              <td width="8" />
              <td><h1>MoviesDB Searcher</h1></td>
            </tr>
          </tbody>
        </table>

        <input 
        style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }}
        onChange={this.handleEventChange.bind(this)}
         placeholder="Enter search item..." />
         {this.state.rows}
      </div>
    );
  }
}

export default App;
