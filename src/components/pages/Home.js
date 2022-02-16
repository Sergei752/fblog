import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoPersonOutline, IoChatboxOutline, IoEyeOutline, IoHeartOutline } from "react-icons/io5";
// import Pagination from 'react-bootstrap/Pagination';
// import PageItem from 'react-bootstrap/PageItem';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const result = await axios.get("http://localhost:8080/posts");
    setData(result.data.content);
  };

  const deletePost = async articleId => {
    await axios.delete(`http://localhost:8080/posts/${articleId}`);
    loadPosts();
  };

  return (
    <div className="list-group">
    {/* <h1>All Posts</h1> */}
    {/* <div className="form-group">
        <input type="text" 
                className="form-control" 
                placeholder="Найти" 
                onChange={event => setSearch(event.target.value)} 
        />
    </div> */}

      {data.map((post) => (
      <div id="home" key={post.articleId} className="list-group-item list-group-item-action">

        <ul className="list-inline">
            <IoPersonOutline size={40} />
            <li className="list-inline-item"><h4>{post.author.name}</h4></li>
            <li className="list-inline-item"><h6><small>{post.author.created}</small></h6></li>
            <li className="list-inline-item"><h5><small>{post.author.role}</small></h5></li>
            <li className="list-inline-item"><h5><small>{post.author.status}</small></h5></li>
        </ul>
        <p>#{post.tags[0].name}</p>

        <div className="d-flex w-100 justify-content-between">
          <h2>{post.title}</h2>
          <small className="text-muted">

          <Link 
            className="btn btn-primary" 
            to={`/posts/${post.articleId}`}>
            View
          </Link>

          <Link
            className="btn btn-outline-primary mr-2"
            to={`/posts/edit/${post.articleId}`}>
            Edit
          </Link>

          <Link
            className="btn btn-danger"
            onClick={() => deletePost(post.articleId)}
            to="/">
            Delete
          </Link>

          </small>
        </div>

        <p>{post.anons}</p>

        <ul className="list-inline">

          <div id="likesAndComments">
            <IoHeartOutline size={25}/>
            <li className="list-inline-item">{post.likes}</li>
            <IoEyeOutline size={25} />
            <li className="list-inline-item">{post.views}</li>
            {/* <IoChatboxOutline size={25} />
            <li className="list-inline-item">3</li> */}
          </div>
          
          {/* <div id="viewsNumber">
            <IoEyeOutline size={25} />
            <li className="list-inline-item">69</li>
          </div> */}

        </ul>
        {/* <small className="mb-1" className="text-muted">{post.fullText}</small> */}
        
      </div>
      ))}

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Home;
