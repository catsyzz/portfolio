import React from 'react';
import useGlobalData from '@docusaurus/useGlobalData';
import Link from '@docusaurus/Link';

export default function BlogSidebar() {
  const globalData = useGlobalData();
  const blogPosts = globalData['@docusaurus/plugin-content-blog'].default.blogPosts;

  return (
    <div className="blog-sidebar">
      <h3>All Posts</h3>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={post.permalink}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}