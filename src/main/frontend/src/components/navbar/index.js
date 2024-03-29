//rce
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from "../../actions/auth";

export class Navbar extends Component {

    render() {
        console.log("Navbar props", this.props);
        const {isAuth, username} = this.props; //деструктуризація
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                <div className="container">
                    <a className="navbar-brand" href="#">Expand at sm</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample03">
                        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Головна</Link>
                            </li>
                            
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        {!isAuth ?
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Вхід</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Реєстрація</Link>
                                </li>
                            </ul>
                            :
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">{username}</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"
                                        onClick={()=>this.props.logoutUser()}>Вихід</a>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        )
    }
}

function mapState(stateRedux) {
    return {
        isAuth: stateRedux.auth.isAuth,
        username: stateRedux.auth.username
    };
}

export default connect(mapState, {logoutUser})(Navbar);
