"use client";

import { useState, useEffect } from "react";
import QuoteCard from "./QuoteCard.jsx";
import QuoteCardSkeleton from "./QuoteCardSkeleton.jsx";

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
  const [searchPosts, setSearchPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // better way to do this?
  const skeletonData = [10, 2, 5, 3, 8, 12, 7, 6, 9];

  const handleSearchChange = (e) => {
    const searchRegex = new RegExp(searchText, "i");

    const filteredData = posts.filter(
      (post) =>
        searchRegex.test(post.creator.username) ||
        searchRegex.test(post.creator.email) ||
        searchRegex.test(post.quote) ||
        searchRegex.test(post.author)
    );

    setSearchText(e.target.value);
    setSearchPosts(filteredData);
  };

  const handleAuthorClick = (author) => {
    setSearchText(author);
  };

  const fetchQuotes = async () => {
    const response = await fetch("/api/quote");
    const data = await response.json();

    setPosts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

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

      {isLoading ? (
        <div className="mt-16 quote_layout">
          {skeletonData.map((size, index) => (
            <QuoteCardSkeleton size={size} key={index} />
          ))}
        </div>
      ) : (
        <QuoteCardList
          data={searchText ? searchPosts : posts}
          handleAuthorClick={handleAuthorClick}
        />
      )}
    </section>
  );
};

export default Feed;
