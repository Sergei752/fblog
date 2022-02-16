import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  let navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    anons: '',  
    fullText: ''
  });

  const { title, anons, fullText } = post;
  const onInputChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:8080/posts', post);
    navigate("/");
  };
  return (
    <div className="container">
    {/* <div id="add-edit"> */}
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Post</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Anons"
              name="anons"
              value={anons}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Text Post"
              name="fullText"
              value={fullText}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Post</button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
