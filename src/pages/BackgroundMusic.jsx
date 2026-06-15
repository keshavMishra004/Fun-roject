import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current?.play().catch(() => {
      console.log("Autoplay blocked");
    });
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="Char.mp3" type="audio/mpeg" />
    </audio>
  );
}