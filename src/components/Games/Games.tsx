import Game from "../Game/Game";
import "./Games.scss"

const Games = () => {
    const games = [
        "Mario Kart 8 Deluxe",
        "Zelda Breath of the Wild",
        "Animal Crossing New Horizons",
        "Human Fall Flat",
    ]

    return (
        <div className="Games">
            {games.map(game =>
                <Game title={game} key={game} />
            )}

        </div>
    );
}

export default Games;