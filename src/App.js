import './App.css';
import SideNav from './components/sidebar/SideNav';
import Main from './components/main/Main';
import { addPosts, getPostsData } from './components/posts/subredditSlice';
import { useDispatch, useSelector } from 'react-redux';
import api from './api/api';
import { useEffect, useState } from 'react';


function App() {

  const dispatch = useDispatch();
  const [postsData, setPostsData] = useState({})
  const [actualDataFromRedux, setActualDataFromRedux] = useState({})
 


  async function loadPosts() {
    const subredditPosts = await api.posts.all(); // this make the api call and return the result
    setPostsData(subredditPosts)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  useEffect(() => {
    dispatch(addPosts(postsData))
  }, [postsData])



  return (
    <div className="App">
      <div className='container'>
        <SideNav />
        <Main />
      </div>
    </div>
  );
}

export default App;

// create store Done 
// create a slice  Dpone 
// create a file for api call  Done 
// connect and get auth token 
// make api calls 
