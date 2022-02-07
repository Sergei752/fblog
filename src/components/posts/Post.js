import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoPersonOutline, IoChatboxOutline, IoEyeOutline, IoHeartOutline } from "react-icons/io5";

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
      
      <div className="box">

        <ul class="list-inline">
          <IoPersonOutline size={40} />
          <li class="list-inline-item"><p>NickName</p></li>
          <li class="list-inline-item"><p><small>02.02.2022 в 22:22</small></p></li>
        </ul>

        <h2>{data.title}</h2>
        <p>{data.fullText}</p>

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
      </div>
  );
};

export default Post;
