import { useState } from "react"
import { useSelectionService } from "../../services/SelectionService"
import { ElementData } from "../../types/ElementData"
import { SoundService } from "../../services/SoundService"
import { Sound } from "../../types/Sound"
import Title from "../Title/Title"
import "./AllAppsButton.scss"
import { useNavigate } from "react-router-dom"

interface AllAppsButtonProps {
    data: ElementData;
    dragging: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const AllAppsButton = ({
    data,
    dragging,
    onClick,
}: AllAppsButtonProps) => {
    const navigate = useNavigate();
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
            selectAllAppsButton(event);
        }
    }

    function selectAllAppsButton(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        SoundService.playSound(Sound.SelectAllAppsButton);
        select(id);
        onClick(event);
    }

    function openAllApps() {
        SoundService.playSound(Sound.OpenAllApps);

        setClicked(true);
        setTimeout(() => {
            setClicked(false);
            navigate("/allgames");
        }, animationDelayInMs);
    }

    return (
        <div className={`AllAppsButton ${isSelected(id) && "selected"} ${clicked && "clicked"}`} style={{"--click-duration": `${clickAnimationDurationInMs}ms`} as React.CSSProperties}>
            <div className="bubble" onClick={handleClick}>
                <Title title={name} visible={isSelected(id)} target="allGames" size="small"/>
                <div className="icon">
                    <img src={image} alt={name} />
                </div>
            </div>
        </div>
    );
}

export default AllAppsButton;