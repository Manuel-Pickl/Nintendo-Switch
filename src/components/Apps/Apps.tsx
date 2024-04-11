import { ElementData } from "../../types/ElementData";
import { Id } from "../../types/Id";
import Systemapp from "../Systemapp/Systemapp";
import "./Apps.scss"

import newsImage from "../../assets/systemapps/News.png"
import eShopImage from "../../assets/systemapps/Nintendo-eShop.png"
import albumImage from "../../assets/systemapps/Album.png"
import controllerImage from "../../assets/systemapps/Controller.png"
import settingsImage from "../../assets/systemapps/System-Settings.png"
import standbyImage from "../../assets/systemapps/Standby-Mode.png"

const Apps = () => {
    const apps: ElementData[] = [
        // "Nintendo Switch Online",
        new ElementData(Id.news, "News", newsImage),
        new ElementData(Id.eShop, "Nintendo eShop", eShopImage),
        new ElementData(Id.album, "Album", albumImage),
        new ElementData(Id.controller, "Controller", controllerImage),
        new ElementData(Id.settings, "System Settings", settingsImage),
        new ElementData(Id.standby, "Standby Mode", standbyImage),
    ];

    return (
        <div className="Apps">
            {apps.map(app => 
                <Systemapp key={app.id} data={app} />
            )}
        </div>
    );
}

export default Apps;