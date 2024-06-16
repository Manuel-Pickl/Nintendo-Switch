import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useReactiveVar } from "@apollo/client";
import { gamesVar } from "../../types/globalVariables";
import { ElementData } from "../../types/ElementData";
// import Game from "../../components/Game/Game";

const AllGames = () => {
    const games: ElementData[] = useReactiveVar(gamesVar);

    return (
        <div className="AllGames">
            <Header />
            
            {games.map(game =>
                // <Game
                //     key={game.id}
                //     data={game}
                //     // dragging={dragging}
                //     // onClick={handleClick}
                // />
                <>{game.name}, </>
            )}
            
            <Footer />
        </div>
    )
}

export default AllGames;