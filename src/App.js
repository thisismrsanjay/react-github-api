import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import $ from 'jquery'
import Profile from './components/Profile'
import Search from './components/Search'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      username:'thisismrsanjay',
      userData:[],
      userRepos:[],
      perPage:25
    }
  }

  //Get user data from github
  getUserData(){
    $.ajax({
      url:'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret'+this.props.clientSecret,
      dataType:'json',
      cache:false,
      success:function(data){
        console.log(data);
        this.setState({userData:data})
      }.bind(this),
      error:function(xhr,status,err){
        this.setState({username:null})
        alert(err)
      }.bind(this)
    })
  }

  getUserRepos(){
    $.ajax({
      url:'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret'+this.props.clientSecret+'&sort=created',
      dataType:'json',
      cache:false,
      success:function(data){
        console.log(data);
        this.setState({userRepos:data})
      }.bind(this),
      error:function(xhr,status,err){
        this.setState({username:null})
        alert(err)
      }.bind(this)
    })
  }
  handleFormSubmit(username){
    this.setState({
      username:username
    },()=>{
      this.getUserData();
      this.getUserRepos();
    })
  }

componentDidMount(){
  this.getUserData();
  this.getUserRepos();
}

  render() {
    return (
      <div className="App">
        <Search onFormSubmit={this.handleFormSubmit.bind(this)}/>
        <Profile {...this.state}/>
      </div>
    );
  }
}

App.propTypes ={
  clientId:PropTypes.string,
  clientSecret:PropTypes.string
}
App.defaultProps={
  clientId:'d639c6febcffbbcfa2ed',
  clientSecret:'4c70b0dbfe6011b4d11f900ab5c63ca6ee920d2f'
}


export default App;
