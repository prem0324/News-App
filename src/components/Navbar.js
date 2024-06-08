import React, { Component } from "react";
import {Link} from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className={`navbar navbar-expand-lg bg bg-${this.props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{color:this.props.mode==='dark'?'white':'black'}}>
              Phone Main Duniya@
            </Link> 
            <button
            
              className={`navbar-toggler bg bg-${this.props.mode==="dark"?'light':""}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/" style={{color:this.props.mode==='dark'?'white':'black'}}>
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/business"
                    style={{color:this.props.mode==='dark'?'white':'black'}}
                  >
                    {" "}
                    Business{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                  style={{color:this.props.mode==='dark'?'white':'black'}}
                    className="nav-link"
                    aria-current="page"
                    to="/entertainment"
                  >
                    {" "}
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                  style={{color:this.props.mode==='dark'?'white':'black'}}
                    className="nav-link"
                    aria-current="page"
                    to="/health"
                  >
                    {" "}
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                  style={{color:this.props.mode==='dark'?'white':'black'}}
                    className="nav-link"
                    aria-current="page"
                    to="/sciences"
                  >
                    {" "}
                    Sciences
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                  style={{color:this.props.mode==='dark'?'white':'black'}}
                    className="nav-link"
                    aria-current="page"
                    to="/sports"
                  >
                    {" "}
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                  style={{color:this.props.mode==='dark'?'white':'black'}}
                    className="nav-link"
                    aria-current="page"
                    to="/technology"
                  >
                    {" "}
                    Technology
                  </Link>
                </li>
              </ul>
              
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    onClick={this.props.Toggle}
                  />
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{color:this.props.mode==="dark"?'white':'black'}}>
                    {this.props.text}
                  </label>
                </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
