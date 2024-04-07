import "./Game.scss"

interface GameProps {
    title: string;
    isSelected: boolean;
    select: (id: string) => void;
}

const Game = ({
    title, isSelected, select
}: GameProps) => {
    const covers: string = "public/covers";
    return (
        <div className={`Game ${isSelected}`}>
            <div className="title-container">
                <div className="title">
                    <span>{title}</span>
                    {/* <span>{title}</span> */}
                </div>
            </div>
            <div className="cover" onClick={() => select(title)}>
                <img src={`${covers}/${title}.jpg`} alt={title} />
            </div>
        </div>
    );
}

export default Game;