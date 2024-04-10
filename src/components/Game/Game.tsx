import { useReactiveVar } from "@apollo/client";
import "./Game.scss"
import { selectedId } from "../../types/globalVariables";
import Title from "../Title/Title";
import { SoundService } from "../../services/SoundService";
import { Sound } from "../../types/Sound";
import { useState } from "react";

interface GameProps {
    title: string;
    dragging: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Game = ({
    title,
    dragging,
    onClick,
}: GameProps) => {
    const covers: string = "covers";
    const selectedIdValue = useReactiveVar(selectedId);

    const [clicked, setClicked] = useState<boolean>(false);
    const clickAnimationDurationInMs: number = 120;

    function gameIsSelected(): boolean {
        const gameIsSelected: boolean = selectedIdValue == title;
        return gameIsSelected;
    }

    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.stopPropagation();

        if (dragging) {
            return;
        }

        if (gameIsSelected()) {
            openGame();
        }
        else {
            selectGame(event);
        }        
    }

    function selectGame(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        SoundService.playSound(Sound.SelectGame);
        selectedId(title);
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
        <div className={`Game ${gameIsSelected() && "selected"} ${clicked && "clicked"}`} style={{"--click-duration": `${clickAnimationDurationInMs}ms`} as React.CSSProperties}>
            <Title title={title} visible={gameIsSelected()} target="game" />
            <div className="cover" onClick={handleClick}>
                <img src={`${covers}/${title}.jpg`} alt={title} draggable="false"/>
            </div>
        </div>
    );
}

export default Game;