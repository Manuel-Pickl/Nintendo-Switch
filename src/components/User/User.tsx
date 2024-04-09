import { useReactiveVar } from "@apollo/client";
import "./User.scss";
import { selectedId } from "../../types/globalVariables";
import Title from "../Title/Title";
import { Sound } from "../../types/Sound";
import { SoundService } from "../../services/SoundService";

interface UserProps {
    user: string;
}

const User = ({
    user
}: UserProps) => {
    const selectedIdValue = useReactiveVar(selectedId);
    const usersPath = "users"

    function userIsSelected(): boolean {
        const userIsSelected: boolean = selectedIdValue == user;
        return userIsSelected;
    }
    
    function handleClick() {
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
    }

    return (
        <div className={`User ${userIsSelected() && "selected"}`}>
            <div className="bubble" onClick={handleClick}>
                <img src={`${usersPath}/${user}.png`} alt="user" />
                <Title title={`Page of ${user}`} visible={userIsSelected()} position="bottom" size="small"/>
            </div>
        </div>
    );
}

export default User;