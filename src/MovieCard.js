import React , { Component } from 'react';
import UserList from './UserList';

class MovieCard extends Component {
 
  render() {
    
    const { users , usersWhoLikedMovie , movie } = this.props;
    
    return (
      <li key={movie.id}>
        <h2>movie.name</h2>
		<h3>Liked by:<h3>
		<UserList usersWhoLikedMovie={usersWhoLikedMovie} users={users} />
	  </li>
	);
  }
}

export default MovieCard