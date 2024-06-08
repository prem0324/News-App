import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div className="my-3 ">
        <div className={`card bg bg-${this.props.mode==="dark"?"dark":"light"} `} style={{width: "18rem", color:`${this.props.mode==="dark"?"white":"black"}`}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
                {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>  
      </div>
    );
  }
}

export default NewsItems;
