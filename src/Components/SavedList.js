import React, { Component } from 'react'; 

class SavedResults extends Component {
  render() {
    if (this.props.savedUsers !== undefined){
        var savedPlaceList = this.props.savedUsers.map(user => {
        return (
            <div className="row" key={user.key}>
                <div className="list-group">
                    <div>
                        <h6>{user.key} - {user.value}</h6>
                        <button onClick={() => this.props.deleteUser(user.key)}>Delete me</button>
                    </div>
                </div>
            </div>
            );
        }) 
    }
    
    return ( 
        <div className="form-group"> 
            <h2>Saved Places</h2>
            <div>
                <ul>
                    {savedPlaceList}
                </ul>
            </div>
        </div> 
    ); 
  }
}

export default SavedResults;
