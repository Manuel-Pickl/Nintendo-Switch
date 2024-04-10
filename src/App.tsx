import { useEffect } from "react";
import Home from "./pages/Home/Home"
import { SoundService } from "./services/SoundService";
import { Sound } from "./types/Sound";

function App() {
  useEffect(() => {
    SoundService.preloadSounds();
  }, []);

  function playClickSound() {
    SoundService.playSound(Sound.Click);
  }

  return (
    <div onClick={playClickSound}>
      <Home />
    </div>
  )
}

export default App
