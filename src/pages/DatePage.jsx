// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function DatePage() {
//   const navigate = useNavigate();

//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = () => {
//     if (date === "" || time === "") {
//       setError("Please select both a date and time ❤️");
//       return;
//     }

//     navigate("/food");
//   };

//   return (
//     <div className="page">
//       <div className="card">
//         <img
//           className="gif"
//           src="https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif"
//           alt="Calendar GIF"
//         />

//         <h1>So... when are you free? 📅</h1>

//         <input
//           type="date"
//           min={new Date().toISOString().split("T")[0]}
//           value={date}
//           onChange={(e) => {
//             setDate(e.target.value);
//             setError("");
//           }}
//         />

//         <select
//           value={time}
//           onChange={(e) => {
//             setTime(e.target.value);
//             setError("");
//           }}
//         >
//           <option value="">Select a time</option>
//           <option value="10:00 AM">10:00 AM</option>
//           <option value="12:00 PM">12:00 PM</option>
//           <option value="2:00 PM">2:00 PM</option>
//           <option value="6:00 PM">6:00 PM</option>
//           <option value="8:00 PM">8:00 PM</option>
//         </select>

//         {error && (
//           <p
//             style={{
//               color: "#ff4d6d",
//               marginTop: "10px",
//               fontWeight: "bold",
//             }}
//           >
//             {error}
//           </p>
//         )}

//         <button
//           className="pinkBtn"
//           onClick={handleSubmit}
//         >
//           Set the Date! 💕
//         </button>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DatePage() {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (date === "" || time === "") {
      setError("Please select both a date and time ❤️");
      return;
    }

    localStorage.setItem("date", date);
    localStorage.setItem("time", time);

    navigate("/food");
  };

  return (
    <div className="page">
      <div className="card">
        <img
          className="gif"
          src="https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif"
          alt="Calendar GIF"
        />

        <h1>So... when are you free? 📅</h1>

        <input
          type="date"
          min={new Date().toISOString().split("T")[0]}
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setError("");
          }}
        />

        <select
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            setError("");
          }}
        >
          <option value="">Select a time</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="6:00 PM">6:00 PM</option>
          <option value="8:00 PM">8:00 PM</option>
        </select>

        {error && (
          <p
            style={{
              color: "#ff4d6d",
              marginTop: "10px",
              fontWeight: "bold",
            }}
          >
            {error}
          </p>
        )}

        <button
          className="pinkBtn"
          onClick={handleSubmit}
        >
          Set the Date! 💕
        </button>
      </div>
    </div>
  );
}