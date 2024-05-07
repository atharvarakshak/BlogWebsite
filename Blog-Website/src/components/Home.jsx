import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-white">Welcome to My Blog</h1>
          <p className="text-xl text-gray-300 mt-4">Insights, stories, and ideas from various domains.</p>
          <Link to="/about" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Learn More About Us
          </Link>
        </div>
      </section>

      <section className="featured-posts">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold">Featured Posts</h2>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {/* Mockup for featured posts */}
            <div className="post bg-white p-4 rounded shadow">
              <h3 className="font-semibold">Post Title One</h3>
              <p className="text-sm">A brief description of the post content goes here...</p>
              <Link to="/posts/1" className="text-blue-500 hover:underline">Read more</Link>
            </div>
            <div className="post bg-white p-4 rounded shadow">
              <h3 className="font-semibold">Post Title Two</h3>
              <p className="text-sm">A brief description of the post content goes here...</p>
              <Link to="/posts/2" className="text-blue-500 hover:underline">Read more</Link>
            </div>
            <div className="post bg-white p-4 rounded shadow">
              <h3 className="font-semibold">Post Title Three</h3>
              <p className="text-sm">A brief description of the post content goes here...</p>
              <Link to="/posts/3" className="text-blue-500 hover:underline">Read more</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-posts">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* Mockup for latest posts */}
            <div className="post bg-white p-4 rounded shadow">
              <h3 className="font-semibold">Latest Post One</h3>
              <p className="text-sm">A brief introduction...</p>
              <Link to="/latest/1" className="text-blue-500 hover:underline">Read more</Link>
            </div>
            <div className="post bg-white p-4 rounded shadow">
              <h3 className="font-semibold">Latest Post Two</h3>
              <p className="text-sm">A brief introduction...</p>
              <Link to="/latest/2" className="text-blue-500 hover:underline">Read more</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
