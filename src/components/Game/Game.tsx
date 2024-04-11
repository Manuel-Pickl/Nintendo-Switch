import "./Game.scss"
import Title from "../Title/Title";
import { SoundService } from "../../services/SoundService";
import { Sound } from "../../types/Sound";
import { useState } from "react";
import { useSelectionService } from "../../services/SelectionService";
import { ElementData } from "../../types/ElementData";

interface GameProps {
    data: ElementData;
    dragging: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Game = ({
    data,
    dragging,
    onClick,
}: GameProps) => {
    const { id, name, image } = data;
    const { isSelected, select } = useSelectionService();

    const [clicked, setClicked] = useState<boolean>(false);
    const clickAnimationDurationInMs: number = 120;

    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.stopPropagation();

        if (dragging) {
            return;
        }

        if (isSelected(id)) {
            openGame();
        }
        else {
            selectGame(event);
        }        
    }

    function selectGame(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        SoundService.playSound(Sound.SelectGame);
        select(id);
        onClick(event);
    }

    function openGame() {
        SoundService.playSound(Sound.OpenGame);

        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, clickAnimationDurationInMs);
    }

    return (
        <div className={`Game ${isSelected(id) && "selected"} ${clicked && "clicked"}`} style={{"--click-duration": `${clickAnimationDurationInMs}ms`} as React.CSSProperties}>
            <Title title={name} visible={isSelected(id)} target="game" />
            <div className="cover" onClick={handleClick}>
                <img src={image} alt={name} />
            </div>
        </div>
    );
}

export default Game;