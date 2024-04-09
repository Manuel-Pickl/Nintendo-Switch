import User from "../User/User";
import "./Header.scss"
import wifi from "../../assets/icons/wifi.png"
import battery from "../../assets/icons/battery.png"

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
            <div className="console-info">
                <div className="time">
                    {new Date().toTimeString().slice(0, 5)}
                </div>
                <div className="icon">
                    <img src={wifi} alt="wifi" />
                </div>
                <div className="icon">
                    <img src={battery} alt="battery" />
                </div>
            </div>
        </div>
    );
}

export default Header;