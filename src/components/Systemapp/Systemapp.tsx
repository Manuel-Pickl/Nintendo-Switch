import Title from "../Title/Title";
import "./Systemapp.scss"
import { SoundService } from "../../services/SoundService";
import { Sound } from "../../types/Sound";
import { useState } from "react";
import { useSelectionService } from "../../services/SelectionService";
import { ElementData } from "../../types/ElementData";
import { Id } from "../../types/Id";

interface SystemappProps {
    data: ElementData;
}

const Systemapp = ({
    data,
}: SystemappProps) => {
    const { id, name, image } = data;
    const { isSelected, select } = useSelectionService();
    
    const [clicked, setClicked] = useState<boolean>(false);
    const clickAnimationDurationInMs: number = 150;
    const animationDelayInMs: number = 1000;

    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.stopPropagation();

        if (isSelected(id)) {
            openApp();
        }
        else {
            selectApp();
        }
    }

    function selectApp() {
        SoundService.playSound(Sound.SelectApp);
        select(id);
    }

    function openApp() {
        var sound: Sound;
        switch (id) {
            case Id.news: sound = Sound.OpenNews; break;
            case Id.eShop: sound = Sound.OpenShop; break;
            case Id.album: sound = Sound.OpenAlbum; break;
            case Id.controller: sound = Sound.OpenController; break;
            case Id.settings: sound = Sound.OpenSettings; break;
            case Id.standby: sound = Sound.OpenStandby; break;
            default: throw Error(`No sound for element: ${id}`);
        }

        SoundService.playSound(sound);

        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, animationDelayInMs);
    }

    return (
        <div className={`Systemapp ${isSelected(id) && "selected"} ${clicked && "clicked"}`} style={{"--click-duration": `${clickAnimationDurationInMs}ms`, "--image": `url(${image}`} as React.CSSProperties}>
            <div className="bubble" onClick={handleClick}>
                <div className={`icon ${id}`}>
                    <img src={image} alt={name} />
                </div>
                <Title title={name} visible={isSelected(id)} target="app" size="small"/>
            </div>
        </div>
    );
}

export default Systemapp;