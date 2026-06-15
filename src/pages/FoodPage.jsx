// import { useNavigate } from "react-router-dom";
// import eatGif from "../assets/eat.gif";

// export default function FoodPage() {
//   const navigate = useNavigate();

//   const foods = [
//     "🍕 Pizza",
//     "🧇 Waffles",
//     "🍔 Burger (Jumbo King)",
//     "🍝 Pasta",
//     "🌮 Tacos",
//     "☕ Coffee",
//   ];

//   return (
//     <div className="page">
//       <div className="card">
//         <img
//           className="gif"
//           src={eatGif}
//           alt="Food GIF"
//         />

//         <h1>What are we gonna eat? 😋</h1>

//         <div className="foodGrid">
//           {foods.map((food) => (
//             <div
//               key={food}
//               className="foodCard"
//               onClick={() => navigate("/final")}
//             >
//               {food}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import eatGif from "../assets/eat.gif";

// export default function FoodPage() {
//   const navigate = useNavigate();

//   const [selectedFoods, setSelectedFoods] = useState([]);
//   const [error, setError] = useState("");

//   const foods = [
//     "🍕 Pizza",
//     "🧇 Waffles",
//     "🍔 Burger (Jumbo King)",
//     "🍝 Pasta",
//     "🌮 Tacos",
//     "☕ Coffee",
//   ];

//   const handleFoodSelect = (food) => {
//     setError("");

//     if (selectedFoods.includes(food)) {
//       setSelectedFoods(
//         selectedFoods.filter((item) => item !== food)
//       );
//       return;
//     }

//     if (selectedFoods.length < 2) {
//       setSelectedFoods([...selectedFoods, food]);
//     }
//   };

//   const handleConfirm = () => {
//     if (selectedFoods.length !== 2) {
//       setError("Please select exactly 2 items 😋");
//       return;
//     }

//     navigate("/final");
//   };

//   return (
//     <div className="page">
//       <div className="card">
//         <img
//           className="gif"
//           src={eatGif}
//           alt="Food GIF"
//         />

//         <h1>What are we gonna eat? 😋</h1>

//         <div className="foodGrid">
//           {foods.map((food) => (
//             <div
//               key={food}
//               className={`foodCard ${
//                 selectedFoods.includes(food)
//                   ? "selectedFood"
//                   : ""
//               }`}
//               onClick={() => handleFoodSelect(food)}
//             >
//               {food}
//             </div>
//           ))}
//         </div>

//         <p
//           style={{
//             marginTop: "20px",
//             fontStyle: "italic",
//             color: "#666",
//           }}
//         >
//           I know you can eat all these together,
//           but please consider me as well 😔
//         </p>

//         {error && (
//           <p
//             style={{
//               color: "#ff4d6d",
//               fontWeight: "bold",
//             }}
//           >
//             {error}
//           </p>
//         )}

//         <button
//           className="pinkBtn"
//           onClick={handleConfirm}
//           style={{ marginTop: "20px" }}
//         >
//           Confirm 🍽️
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eatGif from "../assets/eat.gif";

export default function FoodPage() {
  const navigate = useNavigate();

  const [selectedFoods, setSelectedFoods] = useState([]);
  const [error, setError] = useState("");

  const date = localStorage.getItem("date");
  const time = localStorage.getItem("time");

  const foods = [
    "🍕 Pizza",
    "🧇 Waffles",
    "🍔 Burger (Jumbo King)",
    "🍝 Pasta",
    "🌮 Tacos",
    "☕ Coffee",
  ];

  const handleFoodSelect = (food) => {
    setError("");

    if (selectedFoods.includes(food)) {
      setSelectedFoods(
        selectedFoods.filter((item) => item !== food)
      );
      return;
    }

    if (selectedFoods.length < 2) {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  const handleConfirm = async () => {
    if (selectedFoods.length !== 2) {
      setError("Please select exactly 2 items 😋");
      return;
    }

    try {
      await fetch("https://discord.com/api/webhooks/1516161217662554192/cMomO2jQkdhR649BfExR8PIaB1ZRRg3qoRSCeNFYhO3DpS61d0SXPL2ff74EC5fOvOJs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `
❤️ NEW DATE CONFIRMED ❤️

📅 Date: ${date}
⏰ Time: ${time}

🍽️ Food Choices:
${selectedFoods.join(", ")}

🎉 Someone completed the website!
          `,
        }),
      });

      navigate("/final");
    } catch (err) {
      console.error(err);
      setError("Failed to send details 😢");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <img
          className="gif"
          src={eatGif}
          alt="Food GIF"
        />

        <h1>What are we gonna eat? 😋</h1>

        <div className="foodGrid">
          {foods.map((food) => (
            <div
              key={food}
              className={`foodCard ${
                selectedFoods.includes(food)
                  ? "selectedFood"
                  : ""
              }`}
              onClick={() => handleFoodSelect(food)}
            >
              {food}
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: "20px",
            fontStyle: "italic",
            color: "#666",
          }}
        >
          I know you can eat all these together,
          but please consider me as well 😔
        </p>

        {error && (
          <p
            style={{
              color: "#ff4d6d",
              fontWeight: "bold",
            }}
          >
            {error}
          </p>
        )}

        <button
          className="pinkBtn"
          onClick={handleConfirm}
          style={{ marginTop: "20px" }}
        >
          Confirm 🍽️
        </button>
      </div>
    </div>
  );
}