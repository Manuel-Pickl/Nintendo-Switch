import Header from "../../components/Header/Header";
import homeImage from "../../assets/images/icons/home.png"
import aImage from "../../assets/images/icons/a.png"
import "./Splashscreen.scss"
import { useNavigate } from "react-router-dom";

const Splashscreen = () => {
    const navigate = useNavigate();

    function handleHomeClick() {
        navigate("/toHome");
    }

    return (
        <div className="Splashscreen">
            <Header />
            <div className="icon" onClick={handleHomeClick}>
                <img src={homeImage} alt="homeImage" />
            </div>
            <div className="info">
                <div className="icon">
                    <img src={aImage} alt="a" />
                </div>
                Continue
            </div>
        </div>
    );
}

export default Splashscreen;