import React, { Component } from 'react'; 
import '../App.css';

class SavedUsers extends Component {
  render() {
 
    if (this.props.bindUsers !== undefined){
        var userList = this.props.bindUsers.map(user => {

        return ( 
            <div className="row" key={user.username}>
                <div className="list-group">
                    <div>
                        <h4>{user.name} - {user.email}</h4>
                        <button className="btn btn primary" onClick={() => this.props.editAnUser(user.username)}>Edit</button>
                        <button className="btn btn primary" onClick={() => this.props.deleteAnUser(user.username)}>Delete</button>
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

export default SavedUsers;
