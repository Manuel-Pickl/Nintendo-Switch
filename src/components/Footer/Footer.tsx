import "./Footer.scss"
import switchIcon from "../../assets/icons/switch.png"
import leftClickImage from "../../assets/icons/leftclick.png"
import rightClickImage from "../../assets/icons/rightclick.png"
import { useActionsService } from "../../services/ActionsService"

const Footer = () => {
    const { actions } = useActionsService();

    return (
        <div className="Footer">
            <div className="controllers">
                <div className="icon">
                    <img src={switchIcon} alt="switch" />
                </div>
            </div>
            <div className="actions">
                {actions().map(action => {return (
                    <div key={action.name} className="action">
                        <div className="icon">
                            <img src={action.primary ? leftClickImage : rightClickImage} alt="mouseclick image" />
                        </div>
                        {action.name}
                    </div>    
                )})}
            </div>
        </div>
    );
}

export default Footer;