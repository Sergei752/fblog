import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
  let navigate = useNavigate();
  const { stateId } = useParams();
  const [post, setPost] = useState({
    title: "",
    anons: "",  
    fullText: ""
  });

  const { title, anons, fullText } = post;
  const onInputChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPost();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/posts/${stateId}`, post);
    navigate("/");
  };

  const loadPost = async () => {
    const result = await axios.get(`http://localhost:8080/posts/${stateId}`);
    setPost(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Post</h2>
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
              placeholder="Enter Text"
              name="fullText"
              value={fullText}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Post</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
