import { useEffect, useRef, useState } from "react";
import Game from "../Game/Game";
import "./Games.scss"
import { useDrag } from 'react-use-gesture';
import { vhToPx } from "../../services/UnitService";
import { ElementData } from "../../types/ElementData";
import { Id } from "../../types/Id";
import AllAppsButton from "../AllApps/AllAppsButton";
import allAppsButtonImage from "../../assets/images/icons/all-games.png"
import { useReactiveVar } from "@apollo/client";
import { gamesVar } from "../../types/globalVariables";

const Games = () => {
    const games: ElementData[] = useReactiveVar(gamesVar);
    
    const allGamesButton: ElementData = new ElementData(Id.allAppsButton, "All Apps", allAppsButtonImage)

    const gameListRef = useRef<HTMLDivElement>(null);

    const paddingInVh = 15;
    const padding = vhToPx(paddingInVh);
    const scrollTransitionInMs = 150;

    const [offset, setOffset] = useState<number>(0);
    const [offsetMin, setOffsetMin] = useState<number>(0);
    const offsetMax = 0;
    
    const [dragging, setDragging] = useState(false);
    
    useEffect(() => {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth;
        const gameListWidth = gameListRef?.current?.offsetWidth || 0;
        const newOffsetMin = screenWidth - gameListWidth;
        
        setOffsetMin(newOffsetMin);
    }, [gameListRef]);

    const bind = useDrag(({ down, movement: [mouseX], memo = offset }) => {
        const currentDragDistance = Math.abs(mouseX);
        if (currentDragDistance > 0) {
            requestAnimationFrame(() => setDragging(down));        
        }

        const newOffset = (memo + mouseX) * 1;
        const allowDrag = newOffset < offsetMax && newOffset > offsetMin;
        
        if (down && allowDrag) {
            setOffset(newOffset);
        }

        return memo;
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();

        if (!gameListRef.current) {
            return;
        }

        const clickedGame = event.currentTarget;
        const gameRect = clickedGame.getBoundingClientRect();

        const gameOverflowsLeft = gameRect.left < 0;
        const gameOverflowsRight = gameRect.right > window.innerWidth;

        gameListRef.current.style.transitionDuration = `${scrollTransitionInMs}ms`;
        if (gameOverflowsLeft) {
            const newOffset = offset - gameRect.left + padding
            setOffset(newOffset);
        }
        else if (gameOverflowsRight) {
            const newOffset = offset - (gameRect.right - window.innerWidth + padding);
            setOffset(newOffset);
        }

        setTimeout(() => {
            if (!gameListRef.current) {
                return;
            } 
            
            gameListRef.current.style.transitionDuration = "0ms";
        }, scrollTransitionInMs);
    };

    return (
        <div className="Games">
            <div className="game-list" ref={gameListRef} {...bind()} style={{ translate: `${offset}px`, "--padding": `${paddingInVh}vh` } as React.CSSProperties}>
                {games.slice(0, 12).map(game =>
                    <Game key={game.id} data={game} dragging={dragging} onClick={handleClick}/>
                )}
                <AllAppsButton data={allGamesButton} dragging={dragging} onClick={handleClick}/>
            </div>
        </div>
    );
}

export default Games;