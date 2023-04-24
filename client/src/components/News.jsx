import React, { useState, useEffect } from 'react';

function NewsList() {
  const [bookNews, setBookNews] = useState([]);

  async function getBookNews() {
    const url = `https://newsapi.org/v2/everything?q=book&sortBy=popularity&apiKey=ba9d992d8c1346d0a34785f5553ff238`;
  
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
      const data = await getBookNews();
      setBookNews(data);
    }
    fetchData();
  }, []);


  return (
		<div role="region" aria-label="Book News">
			<h2>Book News</h2>
			<ul className="news-list">
				{(bookNews.length > 0) && bookNews.map((news) => {
					return (
						<li className="single-news" key={news.id}>
							<a href={news.url} className="news-title" target="_blank" rel="noopener noreferrer">{news.title}</a>
						</li>
					)}
				)}
			</ul>
		</div>
  );
}

export default NewsList;