import { Avatar } from '@mui/material'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import React, {forwardRef} from 'react'
import './post.css'
const Post =forwardRef((
    {displayName, avatar, verified,image, text, userName },
    ref)=> {
  return (
    <div className='post' ref={ref}>
        <div className='post--avatar'>
            <Avatar src={avatar}></Avatar>
        </div>
        <div className='post--body'>
            <div className='post--header'>
                <div className='post-headerText'>
                    <h3>
                        {displayName} {" "}
                        <span className='post--headerSpacial'>
                            {verified && <VerifiedUserIcon className='post--badge'/>}
                            @{userName}
                        </span>
                    </h3>
                </div>
                <div className='post-headerDescreption'>
                    <p>{text}</p>
                </div>
            </div>
            <img src={image}/>
            <div className='post--footer'>
                <ChatBubbleOutlineIcon fontSize='small'/>
                <RepeatIcon fontSize='small'/>
                <FavoriteBorderIcon fontSize='small'/>
                <PublishIcon fontSize='small'/>
            </div>
        </div>
    </div>
  )
})

export default Post