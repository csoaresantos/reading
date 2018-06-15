import React from 'react';

export default class MovieRow extends React.Component {
    viewMovie() {
      window.location.href = "https://themoviedb.org/movie/" + this.props.propmovie.id
    }

    render() {
        return <table key={this.props.propmovie.id}>
        <tbody>
          <tr>
            <td>
              <img width="128" alt="img movie" src={this.props.propmovie.poster_src} />
            </td>
            <td>
              <h3>{this.props.propmovie.title}</h3>
              <p>{this.props.propmovie.overview}</p>
              <input type="button" value="View" onClick={this.viewMovie.bind(this)} />
            </td>
          </tr>
        </tbody>
      </table>
    }
}