import React, { useState } from "react";

const Video = (props) => {
  const [deleteVideo, setDeleteVideo ] = useState(props.videoData);
  let [upVote, setUpVote] = useState(0);
  let [DownVote, setDownVote] = useState(0);

  const handleDeleteVideo = (id) => {
      setDeleteVideo(deleteVideo.filter(video => video.id !== id));
  }

  const handleUpVote = () => {
    setUpVote(upVote++);
  }

  const handleDownVote = () => {
    setDownVote(DownVote--);
  }
    
    return (
      <div class="videosContainer">
        {deleteVideo.map((video, index) => (
          <div class= "video">
            <div class="topBtnDisplay">
              <button class = "upBtn" onClick={handleUpVote}>Up Vote</button>
              <button class = "ratingBtn">{video.rating + upVote + DownVote}</button>
              <button class = "downBtn" onClick={handleDownVote}>Down Vote</button>
            </div>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.url.split('=')[1]}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="deleteBtn bg-danger text-white"
            onClick={() => {
              handleDeleteVideo(video.id);
            }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
}

export default Video;