"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditQuote = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const quoteId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    quote: "",
    author: "",
  });

  useEffect(() => {
    const getQuoteDetails = async () => {
      const response = await fetch(`/api/quote/${quoteId}`);
      const data = await response.json();

      setPost({
        quote: data.quote,
        author: data.author,
      });
    };

    if (quoteId) {
      getQuoteDetails();
    }
  }, [quoteId]);

  const updateQuote = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!quoteId) {
      alert("Quote ID is missing");
    }

    try {
      const response = await fetch(`/api/quote/${quoteId}`, {
        method: "PATCH",
        body: JSON.stringify({
          quote: post.quote,
          author: post.author,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateQuote}
      characterLimit={500}
    />
  );
};

export default EditQuote;
