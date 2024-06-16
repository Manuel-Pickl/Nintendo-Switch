import "./Footer.scss"
import switchIcon from "../../assets/images/icons/switch.png"
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
                    <div key={action.name} className="action" onClick={action.action}>
                        <div className="icon">
                            <img src={action.image} alt="mouseclick image" />
                        </div>
                        {action.name}
                    </div>    
                )})}
            </div>
        </div>
    );
}

export default Footer;