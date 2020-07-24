import React, { Component } from 'react';
import MovieCard from './MovieCard';

class ListMovies extends Component {
  
  render() {
    
    const { users , movies , usersByMovieID } = this.props
    
    const movieCards = Object.keys(movies).map(id => {
      <MovieCard
      	key={id}
      	users={users}
      	userWhoLikedMovies={usersByMovieID[id]}
      	movie={movies[id]}
      	/>
	});
                                               
    return <ul>{movieCards}</ul>;

  }
}

export default ListMovies