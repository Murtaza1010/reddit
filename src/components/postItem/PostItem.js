import React from 'react';
import './PostItem.css';

export default function PostItem(props) {
    const { upvote, image, title, author, subreddit, num_comments } = props.post;
    return (
        <div className='post'>
            <div className='post_left'>
                <i className='fas fa-caret-up'></i>
                <span>{upvote}</span>
                <i className='fas fa-caret-down'></i>

            </div>
            <div className='post_center'>
                <img src={image} />
            </div>
            <div className='post_right'>
                <h3><a href={`/r/${subreddit}/${title}`}>{title}</a></h3>
                <span className='post_info'>
                    submitted an hour ago by <br></br>
                    <a href={`/u/${author}`}>{author}</a> <br></br>
                    to <br></br>
                    <a href={`/r/${subreddit}`}>{subreddit}</a>
                </span>
                <p className='post_info'>
                    {num_comments} comments | share | save | hide | report
                </p>

            </div>
        </div>
    )
}
