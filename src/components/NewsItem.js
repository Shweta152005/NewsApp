import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    let {title, description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className="my-3">
       
        <div className="card" >
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
        <span class=" badge rounded-pill bg-danger">{source}</span>
        </div>
  <img src={!imageUrl?"https://images.axios.com/uwxiSIa3W87b4JXxrAMlKKqr0s8=/0x147:7032x4103/1366x768/2025/02/26/1740536262109.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text" ><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank"  className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      
      </div>
    )
  }
}

export default NewsItem
