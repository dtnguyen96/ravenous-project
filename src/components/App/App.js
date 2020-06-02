import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import yelp from '../../util/Yelp';

class App extends React.Component {
  //method to simulate a search
  constructor(props){
    super(props);
    this.state={
       businesses:[]
    };
    this.searchYelp=this.searchYelp.bind(this)
  }
  searchYelp(term,location,sortBy){
    //update state with the retrieved list of businesses
    yelp.search(term,location,sortBy).then(console.log(this.state.businesses)).then(businesses =>{
      this.setState({
        businesses: this.state.businesses
      })
    })
  }
  render(){
    return (
    <div className="App">
  <h1>ravenous</h1>
  <SearchBar searchYelp={this.searchYelp} />
  <BusinessList businesses={this.state.businesses} />
</div>
  );
   }
}

export default App;
