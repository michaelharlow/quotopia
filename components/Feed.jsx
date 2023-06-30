"use client";

import { useState, useEffect } from "react";
import QuoteCard from "./QuoteCard.jsx";

const QuoteCardList = ({ data, handleAuthorClick }) => {
  return (
    <div className="mt-16 quote_layout">
      {data.map((post) => (
        <QuoteCard
          key={post._id}
          post={post}
          handleAuthorClick={handleAuthorClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleAuthorClick = (author) => {
    setSearchText(author);
  };

  useEffect(() => {
    const fetchQuotes = async () => {
      const searchRegex = new RegExp(searchText, "i");

      const response = await fetch("/api/quote");
      const data = await response.json();

      filteredData = data.filter(
        (post) =>
          searchRegex.test(post.creator.username) ||
          searchRegex.test(post.creator.email) ||
          searchRegex.test(post.quote) ||
          searchRegex.test(post.author)
      );

      setPosts(filteredData);
    };

    fetchQuotes();
  }, [searchText]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for an author or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <QuoteCardList data={posts} handleAuthorClick={handleAuthorClick} />
    </section>
  );
};

export default Feed;
