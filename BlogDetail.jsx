import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchBlog, deleteBlog } from '../api/blogApi';

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      const res = await fetchBlog(id);
      setBlog(res.data);
    };
    loadBlog();
  }, [id]);

  const handleDelete = async () => {
    await deleteBlog(id);
    window.location = '/';
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <Link to={`/edit/${blog.id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}