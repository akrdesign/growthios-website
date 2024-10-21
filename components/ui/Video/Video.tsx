import { useRef, useState, useEffect } from "react";

type videoType = {
  src: string
}

const Video = ({ src }: videoType) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoHandler = (control: "play" | "pause") => {
    if (videoRef.current) {
      if (control === "play") {
        videoRef.current.play();
        setPlaying(true);
        setVideoTime(videoRef.current.duration);
      } else if (control === "pause") {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  };

  const fastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 5;
    }
  };

  const revert = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 5;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
        setProgress((videoRef.current.currentTime / videoTime) * 100);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [videoTime]);

  return (
    <div className="custom__video">
      <video
        id="video1"
        ref={videoRef}
        className="video"
        src={src}
      ></video>

      <div className="controlsContainer">
        <div className="controls">
          <img
            onClick={revert}
            className="controlsIcon"
            alt="Rewind 5 seconds"
            src="/backward-5.svg"
          />
          {playing ? (
            <img
              onClick={() => videoHandler("pause")}
              className="controlsIcon--small"
              alt="Pause"
              src="/pause.svg"
            />
          ) : (
            <img
              onClick={() => videoHandler("play")}
              className="controlsIcon--small"
              alt="Play"
              src="/play.svg"
            />
          )}
          <img
            className="controlsIcon"
            onClick={fastForward}
            alt="Fast forward 5 seconds"
            src="/forward-5.svg"
          />
        </div>
      </div>

      <div className="timecontrols">
        <p className="controlsTime">
          {Math.floor(currentTime / 60) +
            ":" +
            ("0" + Math.floor(currentTime % 60)).slice(-2)}
        </p>
        <div className="time_progressbarContainer">
          <div
            style={{ width: `${progress}%` }}
            className="time_progressBar"
          ></div>
        </div>
        <p className="controlsTime">
          {Math.floor(videoTime / 60) +
            ":" +
            ("0" + Math.floor(videoTime % 60)).slice(-2)}
        </p>
      </div>
    </div>
  );
};

export default Video;
