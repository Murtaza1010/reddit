import React from 'react';
import './Main.css';
import Header from '../header/Header';
import Posts from '../posts/Posts';

export default function Main() {
  return (
    <div className='main'>
        <Header />
        <Posts />
       
    </div>
  )
}
