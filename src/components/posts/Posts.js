import React from 'react';
import './Posts.css';
import PostItem from '../postItem/PostItem';


export default function Posts() {
    const posts = [
        {
            upvote: 123,
            image: 'https://images.pexels.com/photos/922611/pexels-photo-922611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Questions about new wallet',
            user: 'theindependedonline',
            subreddit: 'politics',
            comment_count: 547
        },
        {
            upvote: 123,
            image: 'https://images.pexels.com/photos/922611/pexels-photo-922611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Questions about new wallet',
            user: 'theindependedonline',
            subreddit: 'politics',
            comment_count: 547
        },
        {
            upvote: 123,
            image: 'https://images.pexels.com/photos/922611/pexels-photo-922611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Questions about new wallet',
            user: 'theindependedonline',
            subreddit: 'politics',
            comment_count: 547
        }
        
    ]
    return (
        <div className='posts'>
            {
                posts.map(posts => (
                    <PostItem post={posts} />
                ))
            }
        </div>
    )
}
