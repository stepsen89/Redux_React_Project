import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyBsqij2r9oayq_0wxKsY-AiBXu0cbiAysI'

YTSearch({key: API_KEY, term: 'surfing'}, function (data) {
  console.log(data)
})

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { videos: [] }
  }

  render () {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
