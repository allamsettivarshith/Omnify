import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlog, updateBlog } from '../api/blogApi';

export default function BlogEdit() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadBlog = async () => {
      const res = await fetchBlog(id);
      setTitle(res.data.title);
      setContent(res.data.content);
    };
    loadBlog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateBlog(id, { title, content });
    window.location = `/blogs/${id}`;
  };

  return (
    <form onSubmit={handleUpdate}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
      <button type="submit">Update</button>
    </form>
  );
}