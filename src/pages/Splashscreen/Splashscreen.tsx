import { useState } from "react";
import "./Splashscreen.scss"
import { useNavigate } from "react-router-dom";
import homeImage from "../../assets/images/icons/home.png"
import aImage from "../../assets/images/icons/a.png"
import { SoundService } from "../../services/SoundService";
import { Sound } from "../../types/Sound";
import Header from "../../components/Header/Header";

interface SplashscreenProps {
    onClick: () => void;
}

const Splashscreen = ({
    onClick,
}: SplashscreenProps) => {
    const navigate = useNavigate();
    const [clickCount, setClickCount] = useState<number>(0);
    const [state, setState] = useState<"continue"|"repeat">("continue");
    const hightlightsWidthInVh: number = state == "continue" ? 75 : 0;

    const [clicked, setClicked] = useState<boolean>(false);
    const clickAnimationDurationInMs: number = 150;
    const animationDelayInMs: number = 600;

    function handleClick() {
        setClickCount(0);
        onClick();
    }

    function handleHomeClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.stopPropagation();

        switch (state) {
            case "continue": 
                SoundService.playSound(Sound.CloseHighlights);
                setState("repeat");
                break;

            case "repeat":
                SoundService.playSound(Sound.ClickHomeIcon);

                const newClickCount = clickCount + 1;
                setClickCount(newClickCount);

                if (newClickCount >= 3) {
                    openHomeMenu();
                }
                break;

            default: throw Error(`State ${state} does not exist!`);
        }
    }

    function openHomeMenu() {
        SoundService.playSound(Sound.StartHomeMenu);
        setClicked(true);

        setTimeout(() => {
            setClicked(false);
            navigate("/home");
        }, animationDelayInMs);
    }

    function handleBackClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.stopPropagation();

        SoundService.playSound(Sound.OpenHightlights);
        setState("continue");
        setClickCount(0);
    }

    function dotActive(index: number): boolean {
        const dotActive: boolean = clickCount > index;
        return dotActive;
    }

    return (
        <div className={`Splashscreen ${clicked && "clicked"}`} onClick={handleClick} style={{"--click-duration": `${clickAnimationDurationInMs}ms`} as React.CSSProperties}>

            <div className="highlights" style={{"--highlights-width": `${hightlightsWidthInVh}vh`} as React.CSSProperties}>
                <div className="content">
                    <a className="highlight">
                        <img src="" alt="" />
                        <div className="subtitle">Welcome to the News!</div>
                    </a>
                    <a className="highlight">
                        <img src="" alt="" />
                        <div className="subtitle">Want to see more of me?</div>
                    </a>
                    <a className="highlight">
                    </a>
                </div>
                
                <div className="continue">
                    <div className="icon">
                        <img src={aImage} alt="a" />
                    </div>
                    Highlights
                </div>
            </div>
            <div className="login">
                {state == "continue" &&
                    <Header />
                }

                <div className="icon" onClick={handleHomeClick}>
                    <img src={homeImage} alt="homeImage" />
                </div>

                {state == "continue" ? (
                    <div className="continue" onClick={handleHomeClick}>
                        <div className="icon">
                            <img src={aImage} alt="a" />
                        </div>
                        Continue
                    </div>
                ) : (
                    <div className="pressSameButton" onClick={handleHomeClick}>
                        Press the same button three times.
                        <div className="dots">
                            <div className={`dot ${dotActive(0) && "active"}`} />
                            <div className={`dot ${dotActive(1) && "active"}`} />
                            <div className={`dot ${dotActive(2) && "active"}`} />
                        </div>

                        <div className="back" onClick={handleBackClick}>
                            <div className="icon">
                                <img src={aImage} alt="a" />
                            </div>
                            Back
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Splashscreen;