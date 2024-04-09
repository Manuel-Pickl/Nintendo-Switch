import { useReactiveVar } from "@apollo/client";
import "./Game.scss"
import { selectedId } from "../../types/globalVariables";
import Title from "../Title/Title";
import { SoundService } from "../../services/SoundService";
import { Sound } from "../../types/Sound";
import { useRef, useState } from "react";

interface GameProps {
    title: string;
    dragging: boolean;
}

const Game = ({
    title,
    dragging,
}: GameProps) => {
    const covers: string = "covers";
    const selectedIdValue = useReactiveVar(selectedId);

    const [clicked, setClicked] = useState<boolean>(false);
    const clickAnimationDurationInMs: number = 250;

    function gameIsSelected(): boolean {
        const gameIsSelected: boolean = selectedIdValue == title;
        return gameIsSelected;
    }

    function handleClick() {
        if (dragging) {
            return;
        }

        if (gameIsSelected()) {
            openGame();
        }
        else {
            selectGame();
        }        
    }

    function selectGame() {
        SoundService.playSound(Sound.SelectGame);
        selectedId(title);
    }

    function openGame() {
        SoundService.playSound(Sound.OpenGame);

        setClicked(true);
        setTimeout(() => {
            // selectedId("");
            setClicked(false);
        }, clickAnimationDurationInMs/2);
    }

    return (
        <div className={`Game ${gameIsSelected() && "selected"} ${clicked && "clicked"}`} style={{"--click-duration": `${clickAnimationDurationInMs/2}ms`} as React.CSSProperties}>
            <Title title={title} visible={gameIsSelected()}/>
            <div className="cover" onClick={handleClick}>
                <img src={`${covers}/${title}.jpg`} alt={title} draggable="false"/>
            </div>
        </div>
    );
}

export default Game;