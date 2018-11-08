import React from "react";

const VideosPage = ({ video, changeSlide }) => {
  return (
    <video
      style={{ width: "100%" }}
      controls
      autoPlay
      src={video}
      type="video/mp4"
    />
  );
};

export default VideosPage;
