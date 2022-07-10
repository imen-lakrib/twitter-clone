import { Button } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import React, { useState } from 'react'
import './tweetbox.css'
import db from "../firebase"

function TweetBox() {
    const [tweetMessege, settweetMessege]=useState('')
    const [tweetImage, settweetImage]=useState('')
    const sendTweet=(e)=>{
        e.preventDefault()
        db.collection('posts').add({
            displayName:'imen lakrib', 
            avatar:tweetImage, 
            verified:true, 
            image:tweetImage, 
            text:tweetMessege,  
            userName:'imen_lakrib', 

        });
        settweetImage("")
        settweetMessege("")
    }
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox--input'>
                <Avatar src='logo192.png'></Avatar>
                <input 
                    onChange={e=>settweetMessege(e.target.value)}
                    value={tweetMessege} 
                    placeholder="What's happening?"
                    ></input>
                
            </div>
            <input 
                onChange={e=>settweetImage(e.target.value)}
                value={tweetImage} 
                className='tweetBox--imageInput' 
                placeholder='Enter image URL' 
                type="text"
                ></input>
            <Button onClick={sendTweet} type='submit' className='tweetBox--tweetButton'>TWEET</Button>

        </form>
    </div>
  )
}

export default TweetBox