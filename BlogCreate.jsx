import React, { useState } from 'react';
import { createBlog } from '../api/blogApi';

export default function BlogCreate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBlog({ title, content });
    window.location = '/';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
      <button type="submit">Create</button>
    </form>
  );
}