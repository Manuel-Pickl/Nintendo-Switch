import "./Home.scss"
import Apps from "../../components/Apps/Apps";
import Footer from "../../components/Footer/Footer";
import Games from "../../components/Games/Games";
import Header from "../../components/Header/Header";
import { useEffect } from "react";
import { SoundService } from "../../services/SoundService";
import { Sound } from "../../types/Sound";

const Home = () => {
    useEffect(() => {
        SoundService.playSound(Sound.OnHomeMenuStart);
    }, []);
    
    return (
        <div className="Home">
            <Header />
            <Games />
            <Apps />
            <Footer />
        </div>
    );
}

export default Home;