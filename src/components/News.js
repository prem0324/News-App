import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  articles = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
     totalResults:0
    };
    document.title = "Phone Main Duniya@-" + `${this.props.category}`;
  }
  updatePage = async () => {
    // console.log(this.props.pageSize)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=3aee1619b9f04da787b23f568d1fb463&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  };
  // handleNextClick = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updatePage();
  // };

  // handlePrevClick = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updatePage();
  // };

  async componentDidMount() {
    this.setState({
      page: this.state.page,
    });
    this.updatePage();
  }
fetchMoreData =async()=>{
  this.setState({
    page:this.state.page+1
  })
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=5a12d2ecbfd8403089c88a068152f6b5&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parseData = await data.json();
  this.setState({
    articles: this.state.articles.concat(parseData.articles),
    totalResults: parseData.totalResults,
  });
}
  render() {
    return (
      <div className="container my-3">
        <h2
          className="text-center"
          style={{ color: this.props.mode === "dark" ? "white" : "black" }}
        >
          Top Headlins From Phone Main Duniya@ on {this.props.category}
        </h2>
        {this.state.loading&&<Loading/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
          // inverse={true} //
          hasMore={this.state.articles.length !== this.state.totalResults}
          // loader={<h4>Loading...</h4>}
          loader={<h4><Loading/></h4>}  

          scrollableTarget="scrollableDiv"
        >
          <div className="container">
            <div className="row my-4">
              {this.state.articles.map((element) => {
                if(element && element.url){
                return (
                  <div className="col md-4" key={element.url}>
                    <NewsItems
                      newsUrl={element.url?element.url:" "}
                      title={element.title}
                      description={element.description}
                      imageUrl={
                        !element.urlToImage
                          ? "https://cdn.ndtv.com/common/images/ogndtv.png"
                          : element.urlToImage
                      }
                      author={element.author}
                      date={element.publishedAt}
                      mode={this.props.mode}
                    />
                  </div>
                );
                    }
                    else return null;             
                    
                    })}
            
              </div>
          </div>
 </InfiniteScroll>
        </div>
    );
  }
}

export default News;
