import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
  const [data, setPost] = useState({
    stateId: null,
    title: '',
    anons: '',  
    fullText: ''
  });

  const { stateId } = useParams();
  
  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const res = await axios.get(`http://localhost:8080/states/${stateId}`);
    setPost(res.data);
  };

  return (

    <div>
      <div id="postID">
        <h1>{data.title}</h1>
        <p className="lead">{data.fullText}</p>
      </div>
    </div>


    // <div className="container py-4">
    //   {/* <Link className="btn btn-primary" 
    //     to="/">
    //     back to Home
    //   </Link> */}
    //   <h1 className="display-4">Post Id: {stateId}</h1>
    //   <hr />
    //   <ul className="list-group w-50">
    //     <li className="list-group-item">title: {data.title}</li>
    //     <li className="list-group-item">anons: {data.anons}</li>
    //     <li className="list-group-item">text: {data.fullText}</li>
    //   </ul>
    // </div>
  );
};

export default Post;
