import React from 'react'
import { useSelector } from 'react-redux';
import './Header.css';

export default function Header() {
  const currentSelectedSubreddit = useSelector((state) => state.currentSelectedReducer.subreddit)
  return (
    <div className='header'>
      <div className='header_left'>
        <ul >
          {/* // On Click use the function that makes the api call  */}
          <li ><a href='/r/popular' className='active'>Popular</a></li>
          <li><a href='/r/hot'>Hot</a></li>
          <li><a href='/r/rising'>Rising</a></li>
          <li><a href='/r/controversial'>Controversial</a></li>
          <li><a href='/r/gilded'>Gilded</a></li>
        </ul>
      </div>

      <div className='header_right'>
        <h1> {currentSelectedSubreddit}</h1>
        <i className='fas fa-bell'></i>
        <img src=''></img>
        <div className='header_user'>
          <span>Murtaza Karim</span>
          <i className='fas fa-caret-down'></i>
        </div>
      </div>


    </div>
  )
}
