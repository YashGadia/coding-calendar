import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles (() => ({
  title: {
    cursor: "pointer",
    fontFamily: "Rubik",
    flex: 1,
  },
}))

const Header = () => {

  const classes = useStyles();

  return (
    <div className={classes.title}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCenteredExample" aria-controls="navbarCenteredExample" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <Link className="navbar-brand mx-4" to="/">Coding Calendar</Link>
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link mx-2" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <button className="btn btn-outline-success mx-5" type="submit">Get Started</button>
                </form>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
