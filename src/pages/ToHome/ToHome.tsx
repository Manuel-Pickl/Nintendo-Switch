import { useState } from "react";
import "./ToHome.scss"
import { useNavigate } from "react-router-dom";
import homeImage from "../../assets/images/icons/home.png"
import { SoundService } from "../../services/SoundService";
import { Sound } from "../../types/Sound";

interface ToHomePros {
    onClick: () => void;
}

const ToHome = ({
    onClick,
}: ToHomePros) => {
    const navigate = useNavigate();
    const [clickCount, setClickCount] = useState<number>(0);

    
    function handleClick() {
        setClickCount(0);
        onClick();
    }

    function handleHomeClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.stopPropagation();

        SoundService.playSound(Sound.ClickHomeIcon);

        const newClickCount = clickCount + 1;
        setClickCount(newClickCount);

        if (newClickCount >= 3) {
            setTimeout(() => {
                navigate("/home");
            }, 1000);
        }
    }

    function dotActive(index: number): boolean {
        const dotActive: boolean = clickCount > index;
        return dotActive;
    }

    return (
        <div className="ToHome" onClick={handleClick}>
            <div className="icon" onClick={handleHomeClick}>
                <img src={homeImage} alt="homeImage" />
            </div>
            <div className="info">
                Press the same button three times.
                <div className="dots">
                    <div className={`dot ${dotActive(0) && "active"}`} />
                    <div className={`dot ${dotActive(1) && "active"}`} />
                    <div className={`dot ${dotActive(2) && "active"}`} />
                </div>
            </div>
        </div>
    );
}

export default ToHome;