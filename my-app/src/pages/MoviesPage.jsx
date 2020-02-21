import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchMoviesByQuery } from "../services/movies-api";
import { input, button, form } from "../pages/styles.module.css";

export default class MoviesPage extends Component {
    state = {
        query: "",
        movies: [],
    };

    handleChange = e => {
        this.setState({
            query: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { query } = this.state;

        fetchMoviesByQuery(query)
        .then(data => this.setState ({ movies: data.results }))

        this.setState({
            query: '',
        });
    };

    render() {
        const { query, movies } = this.state;
        return (
            <div>
            <form onSubmit={this.handleSubmit} className={form}>
                <input type="text"
                       value={query}
                       onChange={this.handleChange}
                       autoComplete="off"
                       autoFocus
                       className={input}
                />

                <button type="submit"
                        className={button}>
                    Search
                </button>
            </form>

            {movies && (
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