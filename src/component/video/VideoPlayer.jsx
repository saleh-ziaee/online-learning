import React from 'react';

function VideoPlayer({ videoSrc }) {
    return (

        <video className={'w-full'} controls="controls">
            <source type="video/mp4" src={videoSrc} />
        </video>
    );
}

export default VideoPlayer;