import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from "../Nav/Nav";

const HomePage = lazy(() =>
  import("../../pages/HomePage" /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import("../../pages/MoviesPage" /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */),
);

const App = () => (
    <div>
        <Nav />

         <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
                 <Route path="/" exact component={HomePage}/>
                 <Route path="/movies/:movieId" exact component={MovieDetailsPage}/>
                 <Route path="/movies" exact component={MoviesPage}/>
                 <Redirect to="/" />
             </Switch>
         </Suspense>
    </div>
);

export default App;