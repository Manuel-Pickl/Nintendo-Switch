import { useEffect, useRef, useState } from "react";
import Game from "../Game/Game";
import "./Games.scss"
import { useDrag } from 'react-use-gesture';

const Games = () => {
    const games = [
        "The Legend of Zelda Breath of the Wild",
        "Mario Kart 8 Deluxe",
        "Animal Crossing New Horizons",
        "Human Fall Flat",
        "Super Smash Brothers Ultimate",
        "Gang Beasts",
    ];

    const gameListRef = useRef<HTMLDivElement>(null);
    
    const [offset, setOffset] = useState<number>(0);
    const [offsetMin, setOffsetMin] = useState<number>(0);
    const offsetMax = 0;
    
    const [dragging, setDragging] = useState(false);
    const dragThreshold = 8;
    
    useEffect(() => {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth;
        const gameListWidth = gameListRef?.current?.offsetWidth || 0;
        const newOffsetMin = screenWidth - gameListWidth;
        
        setOffsetMin(newOffsetMin);
    }, [gameListRef]);
    
    // const [translationValue, setTranslationValue] = useState<number>(0);
    // function handleClick(e: React.MouseEvent<HTMLElement>) {
    //     if (!gameListRef?.current) {
    //         return;
    //     }

    //     const game = e.currentTarget.getBoundingClientRect();
    //     const screenWidth = window.innerWidth || document.documentElement.clientWidth;

    //     const gameIsFullyVisible = (
    //         game.left >= 0 &&
    //         game.right <= screenWidth
    //     );
    //     if (gameIsFullyVisible) {
    //         return;
    //     }

    //     const overflowRight = game.right > screenWidth;
    //     var newTranslationValue: number;
    //     const paddingInVh = 16;
    //     const paddingInPx = window.innerHeight / 100 * paddingInVh;
    //     const padding = overflowRight ? -paddingInPx : paddingInPx;
    //     const gameOffset = overflowRight ? game.right : game.left;
    //     const edge = overflowRight ? screenWidth : 0;

    //     const translationValueDelta = edge - gameOffset + padding;
    //     newTranslationValue = translationValue + translationValueDelta;

    //     gameListRef.current.style.translate = `${newTranslationValue}px`;
    //     setTranslationValue(newTranslationValue);
    // }

    const bind = useDrag(({ down, movement: [mouseX], memo = offset }) => {
        const currentDragDistance = Math.abs(mouseX);
        if (currentDragDistance > dragThreshold) {
            requestAnimationFrame(() => setDragging(down));        
        }

        const newOffset = (memo + mouseX) * 1;
        const allowDrag = newOffset < offsetMax && newOffset > offsetMin;
        
        if (down && allowDrag) {
            setOffset(newOffset);
        }

        return memo;
    });

    return (
        <div className="Games">
            <div className="game-list" ref={gameListRef} {...bind()} style={{ translate: `${offset}px`}}>
                {games.map(game =>
                    <Game title={game} key={game} dragging={dragging}/>
                )}
            </div>
        </div>
    );
}

export default Games;