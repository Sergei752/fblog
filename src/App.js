import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  withRouter
} from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddPost from './components/posts/AddPost';
import EditPost from './components/posts/EditPost';
import Post from './components/posts/Post';
import Login from './components/users/login';
import SignUp from './components/users/signup';

function App() {
  return ( 
    <Router>
      <div className='App'>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/posts/add' element={<AddPost />} />
          <Route path='/posts/edit/:stateId' element={<EditPost />} />
          <Route path='/posts/:stateId' element={<Post />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route element={<NotFound />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
