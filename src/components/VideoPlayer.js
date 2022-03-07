import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {
  return (
    <iframe
      className="youtube-thumbnail video"
      src={props.embedLink}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default VideoPlayer;
