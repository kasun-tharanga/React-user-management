import React, { Component } from 'react'
import Search from './Components/Search'
import SearchResults from './Components/SearchResults'
import SavedList from './Components/SavedList'
import AddUser from './Components/AddUser' 
import SavedUsers from './Components/SavedUsers' 
import userController from './Controllers/UserController'

import './App.css'

class App extends Component {

  constructor(props){
    super(props);

    this.state = ({
      resultList:[],
      savedList:[],
      insertedUserList:[],
      selectedUser:[]
    });
  }

  updateState(searchResultsSet){
    this.setState({
      resultList : searchResultsSet
    });
  }

  savedItemList(value){ 
    const palces = this.state.savedList.concat({key:Math.random(), value:value});
    this.setState({
      savedList : palces
    });
  }

  deleteItem(itemKey){ 
    var filterArray = this.state.savedList.filter((item)=>item.key !== itemKey);
    this.setState({
      savedList : filterArray
    });
  }

  insertUser(values){
    const newArray = this.state.insertedUserList.concat(values);
    this.setState({ 
      insertedUserList: newArray
    });
  }

  updateUser(name){
    const selectedUserObject = this.state.insertedUserList.filter((user)=>user.username === name);
    this.setState({ 
      selectedUser: selectedUserObject[0] 
    });

    userController.updateUser(name, data => {
      console.log(data);  
      }
    );
  }

  deleteUser(name){
    var filterArray = this.state.insertedUserList.filter((item)=>item.username !== name);
    this.setState({
      insertedUserList : filterArray
    });

    userController.deleteUser(name, data => {
      console.log(data);  
      }
    );
  }

  render() {
    return (
      <div className="containter"> 
        <div className="row">
          <div className="col-md-8">
            <Search 
              callUpdate={this.updateState.bind(this)}/>
            <SearchResults 
              searchedUsers={this.state.resultList}
              savedUserList={this.savedItemList.bind(this)}/>            
          </div>
          <div className="col-md-4">
            <SavedList 
              savedUsers={this.state.savedList}
              deleteUser={this.deleteItem.bind(this)}/>
          </div>
        </div>
        <div className="row">
            <div className="col-md-6">
              <AddUser insertNewUser={this.insertUser.bind(this)} 
                       editUserValue={this.state.selectedUser}/> 
            </div>
            <div className="col-md-6">
              <SavedUsers bindUsers={this.state.insertedUserList} 
                          editAnUser={this.updateUser.bind(this)}
                          deleteAnUser={this.deleteUser.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
