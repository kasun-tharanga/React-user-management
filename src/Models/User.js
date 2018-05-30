
class User {
  constructor (userData) {
    this.name = userData.name;
    this.email = userData.email;
    this.username = userData.username;
    this.password = userData.password;
    this.confirmpassword = userData.confirmpassword;
  }

  getUser(){
    console.log(this.name + ' ' + this.username);        
  }
}

export default User;