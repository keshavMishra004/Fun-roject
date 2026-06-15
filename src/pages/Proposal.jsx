import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import blushGif from "../assets/blush.gif";

export default function Proposal() {
  const navigate = useNavigate();

  const [showConfetti, setShowConfetti] = useState(false);

  const [position, setPosition] = useState({
    left: "55%",
    top: "65%",
  });

  const moveButton = () => {
    const x = Math.random() * 80;
    const y = Math.random() * 80;

    setPosition({
      left: `${x}%`,
      top: `${y}%`,
    });
  };

  const handleYes = () => {
    const music = document.getElementById("bgMusic");

    if (music) {
      music.volume = 0.3;
      music.play().catch((err) => {
        console.log("Music failed to play:", err);
      });
    }

    setShowConfetti(true);

    setTimeout(() => {
      navigate("/yay");
    }, 2000);
  };

  return (
    <>
      {showConfetti && <Confetti />}

      <div className="page">
        <div className="card">
          <img
            className="gif"
            src={blushGif}
            alt="Blush GIF"
          />

          <h1>
            Hello Shruti,
            <br />
            Will you go on a date with me? ❤️
          </h1>

          {showConfetti && (
            <div className="heartBurst">
              ❤️ 💖 💕 💘 🙈 😻 😘
            </div>
          )}

          <div className="buttons">
            <button
              className="yesBtn"
              onClick={handleYes}
            >
              Yes 💖
            </button>

            <button
              className="noBtn"
              onMouseEnter={moveButton}
              onTouchStart={moveButton}
              style={position}
            >
              No 😭
            </button>
          </div>
        </div>
      </div>
    </>
  );
}