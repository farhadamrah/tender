import React from 'react';
import './Blog.scss';
import BlogData from './BlogData';

const Blog = () => {
  return (
    <>
      <div className='post-container'>
        {BlogData.map((post) => (
          <div className='post'>
            <span className='post-date'>{post.date}</span>
            <h3 className='post-title'>{post.title}</h3>
            <img src={post.image} alt='post-image' className='post-image' />
            <p className='post-article'>{post.article}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
