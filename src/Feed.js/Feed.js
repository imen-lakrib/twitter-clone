import React, { useEffect, useState } from 'react'
import './feed.css'
import TweetBox from '../tweetbox/TweetBox'
import Post from '../post/Post'

import db from "../firebase"
import FlipMove from 'react-flip-move'

function Feed() {
    const [posts, setPosts]=useState([])
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);

    
    
   

     
  return (
    <div className='feed'>
        {/* header */}
        <div className='feed--header'>
            <h2>Home</h2>
        </div>
        
        <TweetBox/>
        <FlipMove>
            {posts.map((post) => (
                <Post 
                key={post.text}
                displayName={post.displayName} 
                avatar={post.avatar} 
                verified={post.verified}
                image={post.image} 
                text={post.text} 
                userName={post.userName}
                
                />
            ))}
        </FlipMove>
        
        
        
        
    </div>
  )
}

export default Feed