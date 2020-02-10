import React from 'react'

class SearchMovies extends React.Component{

  render(){
    return(
      <div className="searchContainer">
        <div className="search_box">
          <form>
            <label className="name">
              Search Term:
              </label>
              <input type="text" name="name"/>
              <button className="searchButton">Search</button>
          </form>
        </div>
      </div>

    )
  }
}
export default SearchMovies;
