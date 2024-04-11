import User from "../User/User";
import "./Header.scss"
import wifi from "../../assets/icons/wifi.png"
import battery from "../../assets/icons/battery.png"
import { useState, useEffect } from "react";

const Header = () => {
    const users = [
        "Kass",
        "K.K."
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
                    <User user={user} key={user}/>
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