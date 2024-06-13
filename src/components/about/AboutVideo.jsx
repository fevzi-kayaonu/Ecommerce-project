import React, { useState } from "react";
import video from "../../assets/AboutVideo.mp4";
import ReactPlayer from "react-player";

export const AboutVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayPause = () => {
    setShowVideo(!showVideo);
  };

  return (
    <section className="flex justify-center items-center py-10">
      <div className="relative flex justify-center basis-[80%]">
        <div className={`relative w-full h-full rounded-3xl overflow-hidden`}>
          <ReactPlayer
            url={video}
            playing={showVideo}
            controls={showVideo}
            width="100%"
            height="100%"
            onPlay={() => setShowVideo(true)}
            onPause={() => setShowVideo(false)}
          />
        </div>
        {!showVideo && (
          <button
            className="absolute top-[50%] translate-y-[-50%]  bg-blue-500 md:w-24 md:h-24 h-12 w-12 rounded-full flex justify-center items-center shadow-md z-10"
            onClick={handlePlayPause}
          >
            <i className="fa-solid fa-play text-white md:text-4xl text-2xl"></i>
          </button>
        )}
      </div>
    </section>
  );
};
