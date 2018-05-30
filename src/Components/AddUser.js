import React, { Component } from 'react';
import User from '../Models/User'

class AddUser extends Component {

    getFieldValues(e){
        e.preventDefault();
        const inputName = this.refs.inputName.value;
        const inputEmail = this.refs.inputEmail.value;
        const inputUsername = this.refs.inputUsername.value;
        const inputPassword = this.refs.inputPassword.value;
        const inputConfirmPassword = this.refs.inputConfirmPassword.value;

        let user = new User({name:inputName, email:inputEmail, username:inputUsername, 
                            password:inputPassword, confirmpassword:inputConfirmPassword});        
        this.props.insertNewUser(user);
    } 

    render() {
        if (this.props.editUserValue !== undefined && 
            this.props.editUserValue.username !== undefined){
             
            this.refs.inputName.value = this.props.editUserValue.name;
            this.refs.inputEmail.value = this.props.editUserValue.email; 
            this.refs.inputUsername.value = this.props.editUserValue.username; 
            this.refs.inputPassword.value = this.props.editUserValue.password; 
            this.refs.inputConfirmPassword.value = this.props.editUserValue.confirmpassword; 
        }

        return ( 
            <div>
                <div className="form-group">
                <label htmlFor="name" className="cols-sm-2 control-label">Name</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                        <input type="text" className="form-control" name="name" id="name"  
                            placeholder="Enter Name" ref ="inputName" />
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                        <input type="text" className="form-control" name="email" id="email"  
                            placeholder="Enter your Email" ref ="inputEmail"/>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="username" className="cols-sm-2 control-label">Username</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                        <input type="text" className="form-control" name="username" id="username"  
                            placeholder="Enter your Username" ref ="inputUsername"/>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                        <input type="password" className="form-control" name="password" id="password"  
                            placeholder="Enter your Password" ref ="inputPassword"/>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="confirm" className="cols-sm-2 control-label">Confirm Password</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                        <input type="password" className="form-control" name="confirm" id="confirm"  
                            placeholder="Confirm your Password" ref ="inputConfirmPassword"/>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <button type="button" className="btn btn-primary btn-lg btn-block login-button"
                    onClick={this.getFieldValues.bind(this)}>Register</button>
            </div>  
        </div>
        ); 
  }
}

export default AddUser;