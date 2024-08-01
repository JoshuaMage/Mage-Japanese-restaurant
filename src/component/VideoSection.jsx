import React from 'react';
import VideoClip from "../image/videoCooking.mp4"; // Ensure this path is correct

const VideoSection = () => {
  return (
    <section className="video-section">
      <video
        width="100%" // Adjust width as needed
        height="70%"
        autoPlay // Automatically start playing the video
        loop // Loop the video playback
        muted // Optional: Mute the video if you don't want sound
        style={{ border: 'none', maxWidth: '100%', display: 'block' }} // Customize styles as needed
      >
        <source src={VideoClip} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;
