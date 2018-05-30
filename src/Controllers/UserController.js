import axios from 'axios';

const methods = {};
methods.getUsers = (inputValue, callback) => {

    axios.post('http://localhost:3001/getInfor', {
            passdata: inputValue, 
          })
          .then(function (response) {
            //console.log(response); 
            callback(response.data.data);          
          })
          .catch(function (error) {
            console.log(error);
          });
}

methods.updateUser = (req, callback) => {
  let msg = 'Updating call for the user of ' + req;
  //console.log(msg);
  callback(msg);
}

methods.deleteUser = (req, callback) => {
  let msg = 'Deleteing call for the user of ' + req;
  //console.log(msg);
  callback(msg);
}

export default methods;