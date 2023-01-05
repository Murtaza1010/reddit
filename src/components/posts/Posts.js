import React, { useEffect, useState } from 'react';
import './Posts.css';
import PostItem from '../postItem/PostItem';
import { useSelector } from 'react-redux';
import { getPostsData } from './subredditSlice';


export default function Posts() {
    const [arrOfPosts, setArrOfPosts] = useState([])
    const [posts, setPosts] = useState([])
    const data = useSelector((state) => state.subredditReducer.posts)
    // console.log(data?.data.children)
    // console.log(`resda.com${subbreddit}/.json9`)
    async function convertData(arr) {
        if (arr) {

            // setArrOfPosts(arr.data.children)
            const newData = arr.data.children;
            const newNewData = newData.map((element) => {
                return element.data
            })
            const newNewNewData = newNewData.map((elm) => {
                let ups = elm.ups;
                // let image = elm.image;
                let title = elm.title
                let subreddit = elm.subreddit
                let num_comments = elm.num_comments
                let author = elm.author
                return { author, ups,  title, subreddit, num_comments }
            })
            setPosts(newNewNewData)

            console.log(newNewNewData)

        }

    }








    useEffect(() => {

        if (Object.keys(data).length > 0 && data) {
            convertData(data)
        }

    }, [data])





    return (
        <div className='posts' >
            {
                posts.map(posts => (
                    <PostItem post={posts} />
                ))
            }
            <h1>hello</h1>
        </div>
    )
};
