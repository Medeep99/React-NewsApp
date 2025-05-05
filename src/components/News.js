
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import LoadingSpinner from "./LoadingSpinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = ({
  country = "us",
  apiKey = process.env.REACT_APP_NEWS_API_KEY,
  pageSize = 10,
  ...props
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News99`;
    fetchMoreData();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setLoading(true);
    let nextPage = page + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&language=en&category=${props.category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);

    setPage(nextPage);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        News99 - {capitalizeFirstLetter(props.category)} News
      </h1>

      
        {loading && <div className="flex justify-center my-6">
          <LoadingSpinner />
        </div>}
      

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={ 
          articles.length !== totalResults && loading && (
            <div className="flex justify-center my-6">
              <LoadingSpinner />
            </div>
          )
          
        }
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((element, index) => (
            <NewsItem  element={element}
              key={element.url + index}
              source={element.source.name ? element.source.name : "Unknown"}
              title={
                element.title
                  ? element.title
                  : "Click read more to know more"
                
              }
              description={
                element.description
                  ? element.description
                  : "Click read more to know more"
              }
              imageUrl={
                element.urlToImage
                  ? element.urlToImage
                  : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
              }
              newsUrl={element.url}
              author={element.author ? element.author : "Unknown"}
              publishedTime={
                element.publishedAt
                  ? new Date(element.publishedAt).toGMTString()
                  : "Unknown"
              }
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "us",
  category: "general",
  apiKey: process.env.REACT_APP_NEWS_API_KEY,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  apiKey: PropTypes.string,
};

export default News;
