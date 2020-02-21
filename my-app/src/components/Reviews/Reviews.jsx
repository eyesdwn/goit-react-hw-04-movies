import React, { Component } from "react";
import { fetchReviewsById } from "../../services/movies-api";


export default class Reviews extends Component {
    state = {
        reviews: [],
    };

    componentDidMount() {
        const { movieId } = this.props.match.params;

        fetchReviewsById(movieId).then(data => this.setState({ reviews: data.results}));
    };

    render() {
        const { reviews } = this.state;
        return (
          <div>
            {reviews.length > 0 && (
                <ul>
                {reviews.map(item => (
                    <li key={item.id}>
                        <p>{item.author}</p>
                        <p>{item.content}</p>
                    </li>
                ))}
               </ul>
            )}
            {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
          </div>
        );
    }
}
