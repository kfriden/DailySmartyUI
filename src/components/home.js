import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";

export default class Home extends Component {

  handleSearchBarSubmit(query) { //allow us to access all our form attributes
    console.log('trying to handle submit for query', query)
    //navigate to a new route
    this.props.history.push('/results');
}

  render() {
    return (
      <div className='app'>
        <div>
          <Logo />
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
          <RecentPosts />
        </div>
      </div>
    );
  }
}