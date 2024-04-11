import User from "../User/User"
import "./Header.scss"
import wifi from "../../assets/icons/wifi.png"
import battery from "../../assets/icons/battery.png"
import { useState, useEffect } from "react"
import { Id } from "../../types/Id"
import kass from "../../assets/users/Kass.png"
import kk from "../../assets/users/K.K..png"
import { ElementData } from "../../types/ElementData"

const Header = () => {
    const users: ElementData[] = [
        new ElementData(Id.user1, "Kass", kass),
        new ElementData(Id.user2, "K.K.", kk)
    ];

    const [currentTime, setCurrentTime] = useState(getTime());
    const updateIntervallInMs = 1000;

    function getTime(show24Hours: boolean = true): string {
        return new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: !show24Hours,
        });
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(getTime());
        }, updateIntervallInMs);

        return (() => {
            clearInterval(timer);
        });
    }, []);

    return (
        <div className="Header">
            <div className="users">
                {users.map(user => {return(
                    <User key={user.id} data={user}/>
                )})}
            </div>
            <div className="console-info">
                <div className="time">
                    {currentTime}
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