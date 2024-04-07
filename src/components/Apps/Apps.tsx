import Systemapp from "../Systemapp/Systemapp";
import "./Apps.scss"

const Apps = () => {
    const apps = [
        // "Nintendo Switch Online",
        "News",
        "Nintendo eShop",
        "Album",
        "Controller",
        "System Settings",
        "Standby-Mode",
    ];

    return (
        <div className="Apps">
            {apps.map(app => 
                <Systemapp title={app}/>
            )}
        </div>
    );
}

export default Apps;