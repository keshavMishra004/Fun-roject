import { Routes, Route } from "react-router-dom";
import Proposal from "./pages/Proposal";
import YesPage from "./pages/YesPage";
import DatePage from "./pages/DatePage";
import FoodPage from "./pages/FoodPage";
import FinalPage from "./pages/FinalPage";
import BackgroundMusic from "./pages/BackgroundMusic";

function App() {
  return (
    <>
      <audio id="bgMusic" loop>
        <source
          src="/Edd_Sheeran_-_Perfect_(mp3.pm).mp3"
          type="audio/mpeg"
        />
      </audio>

      <Routes>
        <Route path="/" element={<Proposal />} />
        <Route path="/yay" element={<YesPage />} />
        <Route path="/date" element={<DatePage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </>
  );
}

export default App;