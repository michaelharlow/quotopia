"use client";

import { useState, useEffect } from "react";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();

      setUser(data[0]?.creator.username);
      setPosts(data);
    };

    fetchQuotes();
  }, [params.id]);

  return (
    <Profile
      name={`${user}'s`}
      desc={`welcome to ${user}'s profile page!`}
      data={posts}
    />
  );
};

export default UserProfile;
