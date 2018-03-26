import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'

const API_key = process.env.API_key;
//create
const App = function(){
  return (
  <div>
    <SearchBar/>
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'))