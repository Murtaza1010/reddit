import React from 'react';
import './sideNav.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updateState } from '../posts/currentSelectedSubSlice';
import api from '../../api/api';
import { addPosts } from '../posts/subredditSlice';


export default function SideNav() {
    const dispatch = useDispatch()
    
    const menus = [
        { to: '/r/popular', text: 'popular' },
        { to: '/r/all', text: 'all' },
        { to: '/r/random', text: 'random' }

    ];
    async function loadApiResponseToRedux (subName) {
    const valueResponse = await api.posts.subredditApiCall(subName);
    dispatch(addPosts(valueResponse))

}

    const subreddits = [
        'reddit-suggests',
        'lifestyle',
        'business',
        'sports',
        'private',
        'social',
        'economics',
        'nature',
        'fucked-up',
        'funny',
        'mindset',
        'movies',
        'commodities',
        'technologies',
        'cryptocurrency',
        'holidays',
        'cars',
        'health',
        'money',


    
    ]

    
    return (
        <div className='sidenav'>
            <div className='sideNav_logo'>
                <img alt='logo' src='https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_2.png' />
            </div>
            <div className='sideNav_search'>
                <input type='text' placeholder='search' name='search' />
                <i className='fa fa-search'></i>
            </div>
            <div className='sideNav_links'>
                <ul className='sideNav_menu'>
                    {menus.map(menu => (
                        <li onClick={() => { dispatch(updateState(menu.text)); loadApiResponseToRedux(menu.text) }}>{menu.text}</li>
                        
                        // On Click use the function that makes the api call 
                    ))}
                </ul>
                <hr></hr>
                <ul className='sideNav_subreddit'>
                    {subreddits.map(subreddit => (
                        <li onClick={() => { dispatch(updateState(subreddit)); loadApiResponseToRedux(subreddit) }}>{subreddit}</li>
                        // On Click use the function that makes the api call 
                    ))}
                </ul>

            </div>

        </div>
    )
}
