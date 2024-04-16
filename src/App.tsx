import { useEffect } from "react";
import Home from "./pages/Home/Home"
import { SoundService } from "./services/SoundService";
import { Sound } from "./types/Sound";
import Splashscreen from "./pages/Splashscreen/Splashscreen";
import { Route, Routes } from "react-router-dom";
import ToHome from "./pages/ToHome/ToHome";

function App() {
  useEffect(() => {
    SoundService.preloadSounds();
  }, []);

  function handleClick() {
    SoundService.playSound(Sound.Click);
  }

  function handleRightClick(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
  }
  
  return (
    <div onClick={handleClick} onContextMenu={handleRightClick}>
      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="/toHome" element={<ToHome onClick={handleClick} />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/allgames" element={<AllGames />} />
        <Route path="/user" element={<User />} />
        <Route path="/gamesettings" element={<GameSettings />} />
        <Route path="/news" element={<News />} />
        <Route path="/eshop" element={<EShop />} />
        <Route path="/album" element={<Album />} />
        <Route path="/controller" element={<Controller />} />
        <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </div>
  )
}

export default App
