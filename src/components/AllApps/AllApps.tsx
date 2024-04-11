import { useState } from "react"
import { useSelectionService } from "../../services/SelectionService"
import { ElementData } from "../../types/ElementData"
import { SoundService } from "../../services/SoundService"
import { Sound } from "../../types/Sound"
import Title from "../Title/Title"
import "./AllApps.scss"

interface AllAppsProps {
    data: ElementData;
    dragging: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const AllApps = ({
    data,
    dragging,
    onClick,
}: AllAppsProps) => {
    const { id, name, image } = data;
    const { isSelected, select } = useSelectionService();

    const [clicked, setClicked] = useState<boolean>(false);
    const clickAnimationDurationInMs: number = 150;
    const animationDelayInMs: number = 1000;

    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.stopPropagation();

        if (dragging) {
            return;
        }

        if (isSelected(id)) {
            openAllApps();
        }
        else {
            selectAllApps(event);
        }
    }

    function selectAllApps(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        SoundService.playSound(Sound.SelectAllApps);
        select(id);
        onClick(event);
    }

    function openAllApps() {
        SoundService.playSound(Sound.OpenAllApps);

        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, animationDelayInMs);
    }

    return (
        <div className={`AllApps ${isSelected(id) && "selected"} ${clicked && "clicked"}`} style={{"--click-duration": `${clickAnimationDurationInMs}ms`} as React.CSSProperties}>
            <div className="bubble" onClick={handleClick}>
                <Title title={name} visible={isSelected(id)} target="allGames" size="small"/>
                <div className="icon">
                    <img src={image} alt={name} />
                </div>
            </div>
        </div>
    );
}

export default AllApps;