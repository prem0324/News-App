import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

export default class App extends Component {
  pageSize=5;
  constructor() {
    super();
    this.state = {
      mode: "light",
      text: "Enable Dark mode",
      color: "white",
    };
  }
  ToggleDark = async () => {
    if (this.state.mode === "light") {
      this.setState({
        mode: "dark",
        text: "Disable Dark Mode",
        color: "black",
      });
      document.body.style.background = "#a28089";
    } else {
      this.setState({
        mode: "light",
        text: "Enable Dark Mode",
        color: "white",
      });
      document.body.style.background = "white";
    }
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar
            Toggle={this.ToggleDark}
            mode={this.state.mode}
            color={this.state.color}
            text={this.state.text}
          />
          <Routes>
            <Route
               
              path="/"
              element={
                <News
                key="general"
                  pageSize={this.pageSize}
                  category="general"
                  country="in"
                  mode={this.state.mode}
                />
              }
            />
            <Route
               
              path="/business"
            mode={this.state.mode} 
              element={<News key="business"pageSize={this.pageSize} category="business" country="in"  
            mode={this.state.mode} 
              
              />}
            />
            <Route
               
              path="/entertainment"
              element={
                <News key="entertainment"pageSize={this.pageSize} category="entertainment" country="in" 
            mode={this.state.mode} 
            />
              }
            />
            <Route
               
              path="/health"
              element={<News key="health"pageSize={this.pageSize} category="health" country="in" 
            mode={this.state.mode} 
            />}
            />
            <Route
               
              path="/sciences"  
              element={<News key="science"pageSize={this.pageSize} category="science" country="in" 
            mode={this.state.mode} 
            />}
            />
            <Route
               
              path="/sports"
              element={<News key="sports"pageSize={this.pageSize} category="sports" country="in" 
            mode={this.state.mode} 
            />}
            />
            <Route
               
              path="/technology"
              element={<News key="technology"pageSize={this.pageSize} category="technology" country="in" 
            mode={this.state.mode} 
            />}
            />
          </Routes>
         <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}
