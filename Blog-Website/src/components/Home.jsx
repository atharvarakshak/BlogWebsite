import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const [blogsDisplay, setBlogsDisplay] = useState([]);
  
    useEffect(() => {
      // Fetch blogs for the logged-in user
      const fetchBlogs = async () => {
        try {
          let userEmail = localStorage.getItem("userEmail");
          let response = await fetch("http://localhost:5001/api/homeblogs", {
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
    }, []);
  return (
    <div>
      <section className="hero-section">
        <div className="container mt-10 mx-auto px-4 py-12 text-center ">
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
            {blogsDisplay.map((blog) => (
          <div key={blog.email} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700">{blog.content}</p>
            </div>
            <div className="flex justify-evenly p-4">
              {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Update</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">Delete</button> */}
            </div>
          </div>
        ))}
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
