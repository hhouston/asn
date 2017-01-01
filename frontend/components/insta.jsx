import React from 'react';
// let RNInstagramOAuth = require('react-native-instagram-oauth');

class Insta extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      instaHandle: ''
    };

    this.linkInsta = this.linkInsta.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      instaHandle: event.currentTarget.value
    });
  }

  linkInsta() {
    let instaHandle = this.state.instaHandle;
    const CLIENT_ID = '48de3bd770e941e685b05c8e687664f8';
    const REDIRECT_URI = 'https://lucidlab5.com';
    let auth_url = `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    // let xmlhttp = new XMLHttpRequest();
    //
    //
    // xmlhttp.onreadystatechange = () => {
    //   //ready state of DONE means this is complete
    //   if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
    //     const data = JSON.parse(xmlhttp.responseText);
    //     debugger;
    //     // this.setState({weather: data});
    //   }
    // };
    //
    // xmlhttp.open('GET', auth_url, true);
    // xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    // xmlhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    // xmlhttp.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Range, Content-Disposition, Content-Description');
    // xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xmlhttp.send();

    $.ajax({
     url: `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`,
     type: 'POST',
     headers: {
       'Access-Control-Allow-Origin': '*',
       // xmlhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
        'Content-Type':'application/x-www-form-urlencoded'
     },
     data: {_method: 'delete'},

     success: function(data) {
        console.log(data);
     }
  });
  }


  render () {
    return (
      <div className="forms">
        <h1>Link you Instagram</h1>

          <input
            onChange={this.handleInput}
            placeholder='enter handle..'
            value={this.state.instaHandle}/>

          <button onClick={this.linkInsta}>
            Link
          </button>
      </div>
    );
  }
}

export default Insta;
