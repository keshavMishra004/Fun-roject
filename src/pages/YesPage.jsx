import { useNavigate } from "react-router-dom";
import happyGif from "../assets/happy.gif";

export default function YesPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card">
        <img
          className="gif"
          src={happyGif}
          alt="Happy GIF"
        />

        <h1>WAIT YOU ACTUALLY SAID YES?? 😭</h1>

        <p>I was so ready for you to say no 🥲</p>

        <button
          className="pinkBtn"
          onClick={() => navigate("/date")}
        >
          okay okay! →
        </button>
      </div>
    </div>
  );
}