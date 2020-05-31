import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //term is search term located in the search input
      term: '',
      //location: location search near the location inpiut
      location: '',
      //sortBy: selected sorting option to use
      sortBy: 'best_match'
    }
    this.handleSortByChange=this.handleSortByChange.bind(this);
    this.handleTermChange=this.handleTermChange.bind(this);
    this.handleLocationChange=this.handleLocationChange.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": 'rating',
      "Most Reviewed": 'review_count'
    }
  }
  //method to return current CSS class for a sorting option
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    else {
      return '';
    }
  }
  //method to sets the state of a sorting option 
  handleSortByChange(sortByOption){
    this.setState({
      sortBy: sortByOption
    });
  }
  //method to handle this.state.term changes
  handleTermChange(event){
    this.setState({
      term: event.target.value
    })
  }
  //method to handle this.state.location changes
  handleLocationChange(event){
    this.setState({
      location: event.target.value
    })
  }
  //method to handle a search from user
  handleSearch(event){
    this.props.searchYelp(this.state.term,this.state.location, this.state.sortBy)
    event.preventDefault()
  }
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
    });
  }
  render() {
    return (<div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {this.renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input onChange={this.handleTermChange} placeholder="Search Businesses" />
        <input onChange={this.handleLocationChange} placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a onClick={this.handleSearch} href="www.#.com" >Let's Go</a>
      </div>
    </div>)
  }
}
export default  SearchBar;
