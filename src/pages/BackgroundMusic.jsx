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
      <source src="Edd_Sheeran_-_Perfect_(mp3.pm).mp3" type="audio/mpeg" />
    </audio>
  );
}