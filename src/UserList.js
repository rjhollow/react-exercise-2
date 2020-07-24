import React , { Component } from 'react';

class UserList extends Component {
  render (){
    const { usersWhoLikedMovie , users } = this.props;
    
    if (!usersWhoLikedMovie || usersWhoLikedMovie.length === 0){
      return <p>None of the users liked this movies.</p>
    }
    
    const listofUsers = usersWhoLikedMovie.map(id => (
      <li key={id}>
      	<p>users[id].name</p>
      </
    ));
          
    return <ol>{listofUsers}</ol>;
  }
}

export default UserList