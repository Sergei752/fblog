import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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


//было
// const Home = () => {
//   const url = 'http://localhost:8080/states'
//   const [data, setData] = useState([])

//   useEffect(() => {
//     axios.get(url)
//     .then(res => setData(res.data))
//   }, [])



  // const loadPosts = async () => {
  //   const res = await axios.get('http://localhost:8080/states');
  //   setData(res.data.reverse());
  // };

  // const deletePost = async stateId => {
  //   await axios.delete(`http://localhost:8080/states/${stateId}`);
  //   loadPosts();
  // };

  return (
<div class="list-group">
<h1>All Posts</h1>
  {data.map((post) => (
  <div id="home" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{post.title}</h5>
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

    <p class="mb-1">{post.anons}</p>
    {/* <small class="text-muted">{post.fullText}</small> */}

  </div>
  ))}
 </div>


    // <div className="container">
    //   <div className="py-4">
    //     <h1>All Posts</h1>
    //     <table className="table border shadow">
    //       <thead className="thead-dark">
    //         <tr>
    //           <th scope="col">Title</th>
    //           <th scope="col">Anons</th>
    //           <th scope="col">Text</th>
    //           <th>Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.map((post) => (
    //           <tr key={post.stateId}>
    //             <td>{post.title}</td>
    //             <td>{post.anons}</td>
    //             <td>{post.fullText}</td>
    //             <td>
    //               <Link 
    //                 className="btn btn-primary" 
    //                 to={`/posts/${post.stateId}`}>
    //                   View
    //               </Link>
    //               <Link
    //                 className="btn btn-outline-primary mr-2"
    //                 to={`/posts/edit/${post.stateId}`}>
    //                   Edit
    //               </Link>
    //               <Link
    //                 className="btn btn-danger"
    //                 onClick={() => deletePost(post.stateId)}
    //                 to="/">
    //                   Delete
    //               </Link>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default Home;
