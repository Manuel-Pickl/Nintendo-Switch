import { useReactiveVar } from "@apollo/client";
import "./Game.scss"
import { selectedId } from "../../types/globalVariables";
import Title from "../Title/Title";
import { SoundService } from "../../services/SoundService";
import { Sound } from "../../types/Sound";

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

    function handleClick() {
        if (dragging) {
            return;
        }
        
        SoundService.playSound(Sound.GameClick);
        selectedId(title);
    }

    return (
        <div className={`Game ${selectedIdValue == title}`}>
            <div className="cover" onClick={handleClick}>
                <Title title={title} visible={selectedIdValue == title}/>
                <img src={`${covers}/${title}.jpg`} alt={title} draggable="false"/>
            </div>
        </div>
    );
}

export default Game;