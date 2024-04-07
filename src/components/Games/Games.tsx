import { useState } from "react";
import Game from "../Game/Game";
import "./Games.scss"

const Games = () => {
    const [selectedId, setSelectedId] = useState<string>("Zelda Breath of the Wild");
    const isSelected = (id: string) => {
        return selectedId == id;
    }

    const games = [
        "Mario Kart 8 Deluxe",
        "Zelda Breath of the Wild",
        "Animal Crossing New Horizons",
        "Human Fall Flat",
    ]

    return (
        <div className="Games">
            {games.map(game =>
                <Game title={game} key={game} isSelected={isSelected(game)} select={setSelectedId}/>
            )}

        </div>
    );
}

export default Games;