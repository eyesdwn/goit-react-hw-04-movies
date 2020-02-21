import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "../services/movies-api";


export default class HomePage extends Component {
    state = {
        movies: [],
    };

    componentDidMount() {
      fetchTrendingMovies()
      .then(data => this.setState({ movies: data.results}));
    };

    render() {
      const { movies } = this.state;
      return (
          <div>
              {movies.length > 0 && (
                <ul>
                  {movies.map(movie =>
                      <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                      </li>
                  )}
                </ul>
              )}
          </div>
      );
    }
}