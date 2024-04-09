import { useReactiveVar } from "@apollo/client";
import "./User.scss";
import { selectedId } from "../../types/globalVariables";
import Title from "../Title/Title";

interface UserProps {
    user: string;
}

const User = ({
    user
}: UserProps) => {
    const selectedIdValue = useReactiveVar(selectedId);
    const usersPath = "users"

    return (
        <div className={`User ${selectedIdValue == user}`}>
            <div className="bubble" onClick={() => selectedId(user)}>
                <img src={`${usersPath}/${user}.png`} alt="user" />
                <Title title={`Page of ${user}`} visible={selectedIdValue == user} position="bottom" size="small"/>
            </div>
        </div>
    );
}

export default User;