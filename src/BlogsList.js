import React from "react";
import { Link, useParams } from "react-router-dom";

const BlogsList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <Link to={`blogs/${blog.id}`} key={blog.id}>
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button>Delete</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogsList;
