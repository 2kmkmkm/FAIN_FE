import { useState } from "react";
import play from "../../assets/play.svg";
import stop from "../../assets/stop.svg";

export default function Streaming() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isTouching, setIsTouching] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsTouching(false);
    setFadeOut(false);
  };

  const handleTouching = () => {
    setIsTouching(true);

    setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    setTimeout(() => {
      setIsTouching(false);
      setFadeOut(false);
    }, 2000);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setIsTouching(false);
    setFadeOut(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3">
        <div
          onClick={isPlaying ? handleTouching : undefined}
          className="relative bg-black object-cover rounded-2xl min-w-full h-48 flex justify-center items-center"
        >
          {isPlaying && (
            <img
              src="http://localhost:5000/video_feed"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0 cursor-pointer bg-darkgray"
              draggable={false}
            />
          )}

          {isPlaying && isTouching && (
            <img
              onClick={(e) => {
                e.stopPropagation();
                handleStop();
              }}
              src={stop}
              className={`w-8 z-10 transition-opacity duration-1000 cursor-pointer ${
                fadeOut ? "opacity-0" : "opacity-100"
              }`}
              draggable={false}
            />
          )}

          {!isPlaying && (
            <img
              src={play}
              className="w-8 cursor-pointer"
              draggable={false}
              onClick={handlePlay}
            />
          )}
        </div>
      </div>
    </>
  );
}
