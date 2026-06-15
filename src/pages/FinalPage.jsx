import lastGif from "../assets/last.gif";

export default function FinalPage() {
  return (
    <div className="page">
      <div className="card">
        <img
          className="gif"
          src={lastGif}
          alt="Final GIF"
        />

        <h1>
          Glad you didn't say no 😌
        </h1>

        <h2>
          Be ready to meet your heart hacker,
          lip locker ❤️
        </h2>
        <br></br>
        <p>
          To give website review - keshav_mizz
        </p>
      </div>
    </div>
  );
}