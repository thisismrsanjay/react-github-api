import React, { Component } from 'react';
import RepoList from './RepoList'
class Profile extends Component {
    render() {

        
        return <div>
            <div className="card" style={{ width: "100%" }}>
                <div className="card-header">
                    {(this.props.userData.name)?this.props.userData.name:this.props.userData.login}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-thumbnail" style={{width:"100%"}} src={this.props.userData.avatar_url} alt=""/>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div  className="col-md-12" >
                                    <span style={{marginRight:"10px"}} className="badge badge-primary">{this.props.userData.public_repos} Repos</span>
                                    <span style={{marginRight:"10px"}} className="badge badge-success">{this.props.userData.public_gists} Public Gist</span>
                                    <span style={{marginRight:"10px"}} className="badge badge-info">{this.props.userData.followers} Followers</span>
                                    <span style={{marginRight:"10px"}} className="badge badge-danger">{this.props.userData.following} Following</span>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="list-group">
                                            <li className="list-item"> <strong>UserName: </strong>{this.props.userData.login} </li>
                                            <li className="list-item"> <strong>Location: </strong>{this.props.userData.location} </li>
                                            <li className="list-item"> <strong>Email: </strong>{this.props.userData.email} </li>
                                        </ul>
                                    </div>
                                </div>
                                <br/>
                                <a href={this.props.userData.html_url} target="_blank" className="btn btn-primary">Visit Profile</a>
                            </div>
                        </div></li>
                </ul>
                    <h3>User Repositories</h3>
                    <RepoList userRepos={this.props.userRepos}/>
            </div>
        </div>
    }
}



export default Profile;