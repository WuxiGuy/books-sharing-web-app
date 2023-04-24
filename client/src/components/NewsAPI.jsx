import React, { useState, useEffect } from 'react';

function NewsTicker() {
  const [headlines, setHeadlines] = useState([]);
  const [index, setIndex] = useState(0);

  async function getTopHeadlines() {
    // const apiKey = 'ba9d992d8c1346d0a34785f5553ff238'; 
    const url = `https://newsapi.org/v2/everything?q=library&sortBy=popularity&apiKey=ba9d992d8c1346d0a34785f5553ff238`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    if (data.status === 'ok') {
      return data.articles;
    } else {
      throw new Error(data.message);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getTopHeadlines();
      setHeadlines(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headlines.length]);


  return (
    <div className="newsticker">
      {headlines.length > 0 && <span>{headlines[index].title}</span>}
    </div>
  );
}

export default NewsTicker;