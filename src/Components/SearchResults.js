import React, { Component } from 'react'; 
import '../App.css';

class SearchResults extends Component {
  render() {

    if (this.props.searchedUsers.weather !== undefined){
        var userList = this.props.searchedUsers.weather.map(user => {

        return ( 
            <div className="row" key={user.id}>
                <div className="list-group">
                    <div>
                        <h3>{user.main} - {user.description}</h3>
                        <button className="btn btn primary" 
                            onClick={() => this.props.savedUserList(user.main)}>Save me</button>
                    </div>
                </div>
            </div>
            ); 
        })
    }
 
    return (
        <div className="form-group">  
            <div>
            <ul>
                { userList }
            </ul>
            </div>
        </div> 
    ); 
  }
}

export default SearchResults;
