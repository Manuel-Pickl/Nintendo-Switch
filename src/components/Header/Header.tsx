import User from "../User/User"
import "./Header.scss"
import wifi from "../../assets/images/icons/wifi.png"
import battery from "../../assets/images/icons/battery.png"
import { useState, useEffect } from "react"
import { Id } from "../../types/Id"
import kass from "../../assets/images/users/Kass.png"
import kk from "../../assets/images/users/K.K..png"
import { ElementData } from "../../types/ElementData"
import { getBatteryLevel, getTime } from "../../services/DeviceDataService"
import { useLocation } from "react-router-dom"

const Header = () => {
    const users: ElementData[] = [
        new ElementData(Id.user1, "Kass", kass),
        new ElementData(Id.user2, "K.K.", kk)
    ];

    const updateIntervallInMs = 1000; // lower for quicker updates
    const [batteryLevel, setBatteryLevel] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<string>();

    const path = useLocation().pathname;

    useEffect(() => {
        fetchConsoleData();
        const interval = setInterval(fetchConsoleData, updateIntervallInMs);
        
        return (() => {
            clearInterval(interval);
        });
    }, []);

    async function fetchConsoleData() {
        const battery = await getBatteryLevel();
        setBatteryLevel(battery);
        setCurrentTime(getTime());
    }

    return (
        <div className="Header">
            <div className="users">
                {path == "/home" && 
                    users.map(user => {return(
                        <User key={user.id} data={user}/>
                    )})
                }
            </div>
            
            <div className="console-info">
                <div className="time">
                    {currentTime}
                </div>
                <div className="icon">
                    <img src={wifi} alt="wifi" />
                </div>
                <div className="battery" style={{"--battery-level": `${batteryLevel / 100}`} as React.CSSProperties}>
                    <div>
                        {batteryLevel}
                        <span>%</span>
                    </div>
                    <div className="icon">
                        <img src={battery} alt="battery" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;