import React, { useEffect, useState } from "react";
import NewsItem from "../Components/NewsItem";
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [q, setQ] = useState("All");
  const [language, setLanguage] = useState("en");
  const [searchParams] = useSearchParams();
  let [page, setPage] = useState(1);

  // GNews API Key - yeh use kar
  const API_KEY = "50da510aa461ebef02f507ba074e7980";

  async function getApiData(q, language) {
    try {
      // GNews API URL - Search endpoint use kar raha hun
      let url = `https://gnews.io/api/v4/search?q=${q}&lang=${language}&page=${page}&max=10&apikey=${API_KEY}`;
      
      let response = await fetch(url);
      response = await response.json();
      
      if (response.articles) {
        setData(response.articles);
        setTotalResults(response.totalArticles || response.articles.length);
        console.log(response.articles);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  async function fetchMoreData() {
    setPage(page + 1);
    try {
      let url = `https://gnews.io/api/v4/search?q=${q}&lang=${language}&page=${page + 1}&max=10&apikey=${API_KEY}`;
      
      let response = await fetch(url);
      response = await response.json();
      
      console.log("More data:", response);
      
      if (response.articles) {
        setData(data.concat(response.articles));
      }
    } catch (error) {
      console.log("Error fetching more data:", error);
    }
  }

  useEffect(() => {
    let q = searchParams.get("q") ?? "All";
    let language = searchParams.get("language") ?? "en";
    setQ(q);
    setLanguage(language);
    setPage(1); // Reset page when search changes
    getApiData(q, language);
  }, [searchParams]);

  return (
    <>
      <div className="p-1 bg-dark ">
        <h1 className="text-capitalize  text-center text-white">
          {q} News Articles {totalResults}
        </h1>
        <InfiniteScroll
          next={fetchMoreData}
          hasMore={data.length < totalResults}
          dataLength={data.length}
          loader={
            <div className="my-2 text-white  d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row mx-0">
            {data.map((item, index) => {
              return (
                <NewsItem
                  key={index}
                  title={item.title}
                  description={
                    item.description ??
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, velit ut provident beatae exercitationem non inventore sequi quas deserunt dolore officiis, dignissimos fuga accusantium eveniet quod vitae quam iure soluta perferendis veniam doloremque. Et vel animi, officiis alias ab error provident exercitationem commodi, perferendis adipisci natus doloremque, consequatur praesentium dolorem."
                  }
                  url={item.url}
                  pic={item.image ?? "/public/images/noimage.webp"} // GNews mein 'image' field hai
                  date={item.publishedAt}
                  source={item.source?.name || "Unknown Source"}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default HomePage;