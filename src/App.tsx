import { useEffect } from "react";
import Home from "./pages/Home/Home"
import { SoundService } from "./services/SoundService";

function App() {
  useEffect(() => {
    SoundService.preloadSounds();
  }, []);

  return (
    <>
      <Home />
    </>
  )
}

export default App
