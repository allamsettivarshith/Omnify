import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../api/blogApi';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const res = await fetchBlogs();
      setBlogs(res.data);
    };
    loadBlogs();
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </div>
      ))}
    </div>
  );
}