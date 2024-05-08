import React, { useState, useRef } from 'react';

const NewBlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [img, setImg] = useState('');
  const fileInputRef = useRef(null);
  const [data,setData] = useState({title:"",image:"",content:""})

  
  const imageBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const image = await imageBase64(file);
      setImg(image);
    }
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Submitting new blog:', { title, content, img });
    try {
      // console.log("hello");
    const response = await fetch("http://localhost:5001/api/createblog", {
      method:'POST',
      headers:{
        'Content-Type':'application/json',

      },
      body:JSON.stringify({title:credentials.title,image:credentials.image,content:credentials.content})
    });
    const json = await response.json();
    console.log(json);
    
  } catch (error) {
    alert("Wrong details");
    console.error(error);
  }
  setTitle('');
  setContent('');
  setImg('');
};

const onChange = (e) => {
  setCredentials({...data,[e.target.name]:e.target.value})
};
  return (
    <div className="h-screen mt-10 mb-20 flex-col justify-between items-center bg-red-300">
      <div className="relative top-10 max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">New Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
         
              value={data.name} 
              onChange={onChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <label htmlFor="uploadImage" className="block text-gray-700 font-semibold mb-2">
              Image:
            </label>
            <input
              type="file"
              id="uploadImage"
              name="image"
              onChange={handleUpload}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
              className="border-2 bg-blue-300 rounded-md p-1"
            >
              Upload
            </button>
            {img && <img src={img} className="h-10 w-10" alt="Uploaded Preview" />}
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">
              Content:
            </label>
            <textarea
              id="content"
              value={content}
              name="content"
              onChange={handleContentChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBlogForm;
