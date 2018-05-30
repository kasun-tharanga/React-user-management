import React, { Component } from 'react';
import userController from '../Controllers/UserController';

class Search extends Component {

    getKey(e){
        e.preventDefault();
        const inputValue = this.refs.inputWord.value;
        const update = this.props;
        
        userController.getUsers(inputValue, data => {
                update.callUpdate(data);  
            }
        );
    } 

    render() {
        return ( 
            <div className="form-group"> 
                <legend>Search near-by places</legend> 
                <div className="col-md-8"> 
                    <input type="text" className="form-control" id="searchField"
                        placeholder="Search here" ref ="inputWord"/>
                </div>
                <div className="col-md-4">
                    <div className="info">
                        <button className="btn btn primary" 
                            onClick={this.getKey.bind(this)}>Submit</button>
                    </div>
                </div>
            </div> 
        ); 
  }
}

export default Search;