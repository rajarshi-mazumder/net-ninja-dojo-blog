import React, { useState, useEffect } from "react";
import BlogsList from "./BlogsList";
import useFetch from "./useFetch";

export const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  // const handlDelete = (id) => {
  //   const filteredBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(filteredBlogs);
  // };

  return (
    <div className="home">
      {!error && !isPending ? (
        <BlogsList blogs={blogs} />
      ) : !error ? (
        <div>Loading...</div>
      ) : (
        <div>{error.toString()}</div>
      )}
    </div>
  );
};
