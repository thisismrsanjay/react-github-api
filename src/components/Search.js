import React ,{Component} from 'react';

class Search extends Component{ 

    onSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if(!username){
            alert('enter a username');
        }
        this.props.onFormSubmit(username);
        this.refs.username.value=''
    }

    render(){
        return <div className="mb-2">
            <form onSubmit={this.onSubmit.bind(this)}>
                <label >Search Github User</label>
                <input type="text" ref="username" className="form-control"/> 
            </form>
        </div>
    }
}
export default Search;