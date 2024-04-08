import User from "../User/User";
import "./Header.scss"

const Header = () => {
    const users = [
        "Kass",
        "K.K."
    ]

    return (
        <div className="Header">
            <div className="users">
                {users.map(user => {return(
                    <User user={user} key={user}/>
                )})}
            </div>
        </div>
    );
}

export default Header;