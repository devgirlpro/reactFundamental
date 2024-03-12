import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => {
            console.log("got this Error", error)
        })
    }, [])

  return (
    <>
    <ul>
        {posts.map(post => {
            return (
                <li key={post.id} >{post.title}</li>
            )
        })}
    </ul>
    </>
  )
}

export default PostList