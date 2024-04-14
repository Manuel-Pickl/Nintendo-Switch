import "./Footer.scss"
import switchIcon from "../../assets/icons/switch.png"
import leftClickImage from "../../assets/icons/leftclick.png"
import rightClickImage from "../../assets/icons/rightclick.png"
import { useActionsService } from "../../services/ActionsService"
import { ActionData } from "../../types/ActionData"
import touchImage from "../../assets/icons/touch.png"
import holdImage from "../../assets/icons/hold.png"

const Footer = () => {
    const { actions } = useActionsService();

    function getActionImage(action: ActionData): string {
        var actionImage: string;

        const isTouchDevice: boolean = navigator.maxTouchPoints > 0;
        if (isTouchDevice) {
            actionImage = action.primary ? touchImage : holdImage;
        }
        else {
            actionImage = action.primary ? leftClickImage : rightClickImage;
        }

        return actionImage;
    }
    
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
                            <img src={getActionImage(action)} alt="mouseclick image" />
                        </div>
                        {action.name}
                    </div>    
                )})}
            </div>
        </div>
    );
}

export default Footer;