import React from 'react'
import StoryReel from '../story/StoryReel';
import './Feed.css'
import MessageSender from '../messagsender/MessageSender';
import Post from '../post/Post';
import Widget from '../widget/Widget';

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post />
        </div>
    )
}
export default Feed;