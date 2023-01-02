import React from 'react';
import './sideNav.css';


export default function SideNav() {
    const menus = [
        { to: '/r/popular', text: 'popular'},
        { to: '/r/all', text: 'all' },
        { to: '/r/random', text: 'random' }

    ];
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
                        <li><a href={menu.to}>{menu.text}</a></li>
                    ))}
                </ul>
                <hr></hr>
                <ul className='sideNav_subreddit'>
                        {subreddits.map(subreddit => (
                            <li><a href={`/r/${subreddit}`}>{subreddit}</a></li>
                        ))}
                </ul>

            </div>

        </div>
    )
}
