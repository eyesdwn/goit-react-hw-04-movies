import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import { fetchMoviesById } from "../services/movies-api";
import MovieDetail from "../components/MovieDetails/MovieDetails";
import Reviews from "../components/Reviews/Reviews";
import Cast from "../components/Cast/Cast";
import { info, list, movieDetail } from "../pages/styles.module.css";

const getIdFromProps = props => props.match.params.movieId;

export default class MovieDetailsPage extends Component {
    state = {
        movie: null,
    };

    componentDidMount() {
        const id = getIdFromProps(this.props);

        fetchMoviesById(id)
        .then(data => this.setState({ movie: data}));
    };

    handleGoBack = () => {
        const { location, history } = this.props;
        location.state ? history.push(location.state.prevPage) : history.goBack();

    };

    render() {
        const { movie } = this.state;
        const { match } = this.props;
        return (
            <div className={movieDetail}>
                {movie && (
                  <>
                  <BrowserRouter>
                    <button onClick={this.handleGoBack} type="button">Go back</button>
                    <MovieDetail {...movie} />
                    <div className={info}>
                      <p>Additional information</p>
                      <ul className={list}>
                          <li>
                            <Link to={`${match.url}/cast`} >Cast</Link>
                          </li>
                          <li>
                            <Link to={`${match.url}/reviews`} >Reviews</Link>
                          </li>
                      </ul>
                    </div>
                      <Switch>
                       <Route path={`${match.path}/cast`} component={Cast}/>
                       <Route path={`${match.path}/reviews`} component={Reviews}/>
                      </Switch>
                    </BrowserRouter>
                  </>
                )}
            </div>
        );
    }
}