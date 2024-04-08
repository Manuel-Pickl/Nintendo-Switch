import { useReactiveVar } from "@apollo/client";
import "./Game.scss"
import { selectedId } from "../../globalVariables";
import Title from "../Title/Title";

interface GameProps {
    title: string;
}

const Game = ({
    title
}: GameProps) => {
    const covers: string = "public/covers";
    const selectedIdValue = useReactiveVar(selectedId);

    return (
        <div className={`Game ${selectedIdValue == title}`}>
            <div className="cover" onClick={() => selectedId(title)}>
                <Title title={title} visible={selectedIdValue == title}/>
                <img src={`${covers}/${title}.jpg`} alt={title} draggable="false"/>
            </div>
        </div>
    );
}

export default Game;