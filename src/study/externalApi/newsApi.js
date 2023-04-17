//https://newsapi.org/

import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import axios from "axios";
import NewsList from "./newsList";
import Categories_Ex from "./category";

/*
https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8016c95b537c400ca014bb6fcb7b6c99
(한국 전체뉴스)
https://newsapi.org/v2/top-headlines?country=kr&apiKey=8016c95b537c400ca014bb6fcb7b6c99
(한국 특정 category News)
https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=8016c95b537c400ca014bb6fcb7b6c99
*/

const NewsService_Ex = () => {
  const [data, setData] = useState(null);
  const onClick1 = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=8016c95b537c400ca014bb6fcb7b6c99"
      )
      .then((response) => {
        setData(response.data);
      });
  };

  const onClick2 = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=8016c95b537c400ca014bb6fcb7b6c99"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <div>
      <div>
        <button onClick={onClick2}>뉴스 불러오기</button>
      </div>
      {data && (
        <textarea
          rows={24}
          cols={80}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
      <Categories_Ex category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
};

export default NewsService_Ex;
