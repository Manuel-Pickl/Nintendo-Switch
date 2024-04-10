import { useReactiveVar } from "@apollo/client";
import "./User.scss";
import { selectedId } from "../../types/globalVariables";
import Title from "../Title/Title";
import { Sound } from "../../types/Sound";
import { SoundService } from "../../services/SoundService";
import { useState } from "react";

interface UserProps {
    user: string;
}

const User = ({
    user
}: UserProps) => {
    const selectedIdValue = useReactiveVar(selectedId);
    const usersPath = "users"

    const [clicked, setClicked] = useState<boolean>(false);
    const clickAnimationDurationInMs: number = 150;

    function userIsSelected(): boolean {
        const userIsSelected: boolean = selectedIdValue == user;
        return userIsSelected;
    }
    
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.stopPropagation();

        if (userIsSelected()) {
            openUser();
        }
        else {
            selectUser();
        }
    }

    function selectUser() {
        SoundService.playSound(Sound.SelectUser);
        selectedId(user);
    }

    function openUser() {
        SoundService.playSound(Sound.OpenUser);

        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, clickAnimationDurationInMs);
    }

    return (
        <div className={`User ${userIsSelected() && "selected"} ${clicked && "clicked"}`} style={{"--click-duration": `${clickAnimationDurationInMs}ms`, "--avatar": `url(${usersPath}/${user}.png)`} as React.CSSProperties}>
            <div className="bubble" onClick={handleClick}>
                <img src={`${usersPath}/${user}.png`} alt="user" />
            </div>
            <Title title={`Page of ${user}`} visible={userIsSelected()} target="user" size="small"/>
        </div>
    );
}

export default User;