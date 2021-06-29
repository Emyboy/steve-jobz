import React from 'react';
import Logo from '../../assets/images/logo.svg'

export default function Navbar() {
    return (
        <header className="header header-transparent">
            <nav className="navbar navbar-static-top navbar-expand-lg navbar-light header-sticky is-sticky">
                <div className="container-fluid">
                    <button id="nav-icon4" type="button" className="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <a className="navbar-brand" href="index.html">
                        <img className="img-fluid" src={Logo} alt="logo" />
                    </a>
                    <div className="navbar-collapse collapse justify-content-start">
                        <ul className="nav navbar-nav">
                            <li className="nav-item dropdown active">
                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                            </li>
                        </ul>
                    </div>
                    <div className="add-listing">
                        <div className="login d-inline-block mr-4">
                            <a href="login.html" data-toggle="modal" data-target="#exampleModalCenter"><i className="far fa-user pr-2"></i>Sign in</a>
                        </div>
                        <a className="btn btn-white btn-md" href="post-a-job.html"> <i className="fas fa-plus-circle"></i>Post a job</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
