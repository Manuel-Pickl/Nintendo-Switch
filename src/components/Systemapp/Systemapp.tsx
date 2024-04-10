import { useReactiveVar } from "@apollo/client";
import { selectedId } from "../../types/globalVariables";
import Title from "../Title/Title";
import "./Systemapp.scss"
import { SoundService } from "../../services/SoundService";
import { Sound } from "../../types/Sound";
import { useState } from "react";

interface SystemappProps {
    title: string;
}

const Systemapp = ({
    title,
}: SystemappProps) => {
    const systemapps: string = "systemapps";
    const selectedIdValue = useReactiveVar(selectedId);

    const [clicked, setClicked] = useState<boolean>(false);
    const clickAnimationDurationInMs: number = 150;

    function appIsSelected(): boolean {
        const userIsSelected: boolean = selectedIdValue == title;
        return userIsSelected;
    }
    
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.stopPropagation();

        if (appIsSelected()) {
            openApp();
        }
        else {
            selectApp();
        }
    }

    function selectApp() {
        SoundService.playSound(Sound.SelectApp);
        selectedId(title);
    }

    function openApp() {
        var sound: Sound;
        switch (title) {
            case "News": sound = Sound.OpenNews; break;
            case "Nintendo-eShop": sound = Sound.OpenShop; break;
            case "Album": sound = Sound.OpenAlbum; break;
            case "Controller": sound = Sound.OpenController; break;
            case "System-Settings": sound = Sound.OpenSettings; break;
            case "Standby-Mode": sound = Sound.OpenStandby; break;
            default: throw Error(`No sound for element: ${title}`);
        }

        SoundService.playSound(sound);

        setClicked(true);

        const animationDelay: number = title == "Album" ? 1000 : clickAnimationDurationInMs;
        setTimeout(() => {
            setClicked(false);
        }, animationDelay);
    }

    return (
        <div className={`Systemapp ${appIsSelected() && "selected"} ${clicked && "clicked"}`} style={{"--click-duration": `${clickAnimationDurationInMs}ms`} as React.CSSProperties}>
            <div className="bubble" onClick={handleClick}>
                <div className={`icon ${title}`}>
                    <img src={`${systemapps}/${title}.png`} alt={title} draggable="false" />
                </div>
                <Title title={title} visible={selectedIdValue == title} target="app" size="small"/>
            </div>
        </div>
    );
}

export default Systemapp;