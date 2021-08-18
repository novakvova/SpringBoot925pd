import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import history from '../history';

export class Login extends Component {

    componentDidMount=() =>{
        this.props.history.push('/');
    }
    
    render() {
        console.log(this);
        return (
            <div>
                <h1>Login Page</h1>
            </div>
        )
    }
}

export default withRouter(Login);
