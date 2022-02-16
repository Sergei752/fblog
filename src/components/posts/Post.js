import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoPersonOutline, IoChatboxOutline, IoEyeOutline, IoHeartOutline } from "react-icons/io5";

const Post = () => {
  const [post, setPost] = useState({
    // articleId: null,
    // title: '',
    // anons: '',  
    // fullText: ''
  });

  const { stateId } = useParams();
  
  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const res = await axios.get(`http://localhost:8080/posts/${stateId}`);
    setPost(res.data);
  };

  return (
      <div key={post.userId} className="box">

        {/* <div>{post.likes}</div> */}
      
        <ul className="list-inline">
          <IoPersonOutline size={40} />
          <li className="list-inline-item"><p>NickName</p></li>
          <li className="list-inline-item"><p><small>02.02.2022 в 22:22</small></p></li>
        </ul>

        <p>#front #back #pagination</p>
        <h2>{post.title}</h2>
        <p>{post.fullText}</p>

        <ul className="list-inline">
          <div id="likesAndComments">
            <IoHeartOutline size={25}/>
            <li className="list-inline-item">{post.likes}</li>
            <IoChatboxOutline size={25} />
            <li className="list-inline-item">3</li>
            <IoEyeOutline size={25} />
            <li className="list-inline-item">{post.views}</li>
          </div>
        </ul>

        <div className="box">
          <p>Если нажать на значок комментарии, вылезет это окно снизу поста с комментами</p>
        </div>

      </div>
      
  );
};

export default Post;
