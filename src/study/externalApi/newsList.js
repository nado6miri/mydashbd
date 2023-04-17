import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./newsItem";
import axios from "axios";
import usePromise from "./usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// usePromise  사용하지 않고 직접 작성한 코드
/*
const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // useEffect 등록하는 함수에 async를 붙이면 안됨.뒷정리 함수이기 때문...
    // useEffect 내부에 async/await를 사용하고 싶다면 함수 내부에 async 가 붙은 또다른 함수를 만들어 사용해야 함.

    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;

        console.log("query = ", query);
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8016c95b537c400ca014bb6fcb7b6c99`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  const [loading2, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8016c95b537c400ca014bb6fcb7b6c99`
    );
  }, [category]);

  const onClick2 = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=8016c95b537c400ca014bb6fcb7b6c99"
      );
      setArticles(response.data.articles);
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) {
    return <NewsListBlock>데이터 요청 중....</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      <hr></hr>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};
*/

// usePromise
const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8016c95b537c400ca014bb6fcb7b6c99`
    );
  }, [category]);

  /*
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=8016c95b537c400ca014bb6fcb7b6c99"
      );
      setArticles(response.data.articles);
    } catch (e) {
      console.log(e);
    }
  };
  */

  if (loading) {
    return <NewsListBlock>데이터 요청 중....</NewsListBlock>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>데이터 요청 중 에러발생....</NewsListBlock>;
  }

  const { articles } = response.data;
  return (
    <NewsListBlock>
      {/*
        <button onClick={onClick}>뉴스 불러오기</button>
    */}
      <hr></hr>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
