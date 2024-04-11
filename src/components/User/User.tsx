import "./User.scss";
import Title from "../Title/Title";
import { Sound } from "../../types/Sound";
import { SoundService } from "../../services/SoundService";
import { useState } from "react";
import { useSelectionService } from "../../services/SelectionService";
import { ElementData } from "../../types/ElementData";

interface UserProps {
    data: ElementData;
}

const User = ({data}: UserProps) => {
    const { id, name, image } = data;
    const { isSelected, select } = useSelectionService();

    const [clicked, setClicked] = useState<boolean>(false);
    const clickAnimationDurationInMs: number = 150;

    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.stopPropagation();

        if (isSelected(id)) {
            openUser();
        }
        else {
            selectUser();
        }
    }

    function selectUser() {
        SoundService.playSound(Sound.SelectUser);
        select(id);
    }

    function openUser() {
        SoundService.playSound(Sound.OpenUser);

        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, clickAnimationDurationInMs);
    }

    return (
        <div className={`User ${isSelected(id) && "selected"} ${clicked && "clicked"}`} style={{"--click-duration": `${clickAnimationDurationInMs}ms`, "--image": `url(${image}`} as React.CSSProperties}>
            <div className="bubble" onClick={handleClick}>
                <img src={image} alt={name} />
            </div>
            <Title title={`Page of ${name}`} visible={isSelected(id)} target="user" size="small"/>
        </div>
    );
}

export default User;