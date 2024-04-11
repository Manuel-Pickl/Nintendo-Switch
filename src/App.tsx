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

  function handleRightClick(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
  }
  
  return (
    <div onClick={playClickSound} onContextMenu={handleRightClick}>
      <Home />
    </div>
  )
}

export default App
