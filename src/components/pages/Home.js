import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoPersonOutline, IoChatboxOutline, IoEyeOutline, IoHeartOutline } from "react-icons/io5";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const result = await axios.get("http://localhost:8080/states");
    setData(result.data.reverse());
  };

  const deletePost = async stateId => {
    await axios.delete(`http://localhost:8080/states/${stateId}`);
    loadPosts();
  };

  return (
    <div class="list-group">
    {/* <h1>All Posts</h1> */}
    {/* <div className="form-group">
        <input type="text" 
                className="form-control" 
                placeholder="Найти" 
                onChange={event => setSearch(event.target.value)} 
        />
    </div> */}

      {data.map((post) => (
      <div id="home" class="list-group-item list-group-item-action">

        <ul class="list-inline">
            <IoPersonOutline size={40} />
            <li class="list-inline-item"><p>NickName</p></li>
            <li class="list-inline-item"><p><small>02.02.2022 в 22:22</small></p></li>
        </ul>

        <div class="d-flex w-100 justify-content-between">
          <h2>{post.title}</h2>
          <small class="text-muted">

          <Link 
            className="btn btn-primary" 
            to={`/posts/${post.stateId}`}>
            View
          </Link>

          <Link
            className="btn btn-outline-primary mr-2"
            to={`/posts/edit/${post.stateId}`}>
            Edit
          </Link>

          <Link
            className="btn btn-danger"
            onClick={() => deletePost(post.stateId)}
            to="/">
            Delete
          </Link>

          </small>
        </div>

        <p>{post.anons}</p>

        <ul class="list-inline">

          <div id="likesAndComments">
            <IoHeartOutline size={25}/>
            <li class="list-inline-item">5</li>
            <IoChatboxOutline size={25} />
            <li class="list-inline-item">3</li>
          </div>
          
          <div id="viewsNumber">
            <IoEyeOutline size={25} />
            <li class="list-inline-item">69</li>
          </div>

        </ul>
        {/* <small class="mb-1" class="text-muted">{post.fullText}</small> */}

      </div>
      ))}
    </div>
  );
};

export default Home;
