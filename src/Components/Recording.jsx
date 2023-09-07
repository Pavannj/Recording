import React from "react";
import "./Recording.css"
import VideoRecorder from "react-video-recorder";

function Recording() {
  return (
    <>
    <h1>Record your video</h1>
    {/* Video Recording */}
      <VideoRecorder id="Video"
        onRecordingComplete={(videoBlob) => {
          console.log("videoBlob", videoBlob);
        }}
      />
    </>
  );
}

export default Recording;
