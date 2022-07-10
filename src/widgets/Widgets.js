import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';
import './widgets.css'
function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets--input'>
        <SearchIcon className='widgets--searchIcon'/>
        <input placeholder='Search Twitter' type='text'></input>
      </div>
      <div className='widgets--widgetContainer'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed
          tweetId={'1545174396356239360'}/>
           <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Imen_lakrib"
          options={{height: 400}}/>
        <TwitterShareButton
          url={'https://facebook.com/imen_lakrib'}
          options={{ text: '#reactjs is awesome', via: 'Imen_lakrib' }}/>
      </div>
    </div>
  )
}

export default Widgets