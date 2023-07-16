"use client";

import Link from "next/link";
import { useState } from "react";

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
  characterLimit,
}) => {
  const [characterCount, setCharacterCount] = useState(0);

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing quotes with the world, and let your imagination
        run wild.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your Quote
          </span>
          <p className="font-satoshi text-gray-500 text-sm">
            {`Character limit: ${characterCount}/500`}
          </p>
          <textarea
            value={post.quote}
            onChange={(e) => {
              if (e.target.value.length > characterLimit) return;
              setCharacterCount(e.target.value.length);
              setPost({ ...post, quote: e.target.value });
            }}
            placeholder="Enter your quote here..."
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Author{" "}
            <span className="font-normal">
              (Seneca, Obama, Abe Lincoln, etc.)
            </span>
          </span>
          <input
            value={post.author}
            onChange={(e) => {
              if (e.target.value.length > 25) return;
              setPost({ ...post, author: e.target.value });
            }}
            placeholder="Author"
            required
            className="form_input"
          ></input>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
