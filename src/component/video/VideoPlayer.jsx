import React from 'react';

function VideoPlayer({ videoSrc }) {
    return (

        <video className={'w-full'} controls="controls" src={videoSrc}>

        </video>
    );
}

export default VideoPlayer;