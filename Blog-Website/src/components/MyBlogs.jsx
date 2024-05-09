import React, { useState, useEffect } from 'react';

const MyBlogs = ({ userId }) => {
  const [blogsDisplay, setBlogsDisplay] = useState([]);

  useEffect(() => {
    // Fetch blogs for the logged-in user
    const fetchBlogs = async () => {
      try {
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:5001/api/myblogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            
              email: userEmail,
              
              })
        });

          const data = await response.json();

          setBlogsDisplay(data);
       
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [userId]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-8">My Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsDisplay.map((blog) => (
          <div key={blog.email} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700">{blog.content}</p>
            </div>
            <div className="flex justify-evenly p-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Update</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
