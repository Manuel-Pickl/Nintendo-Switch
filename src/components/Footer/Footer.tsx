import "./Footer.scss"
import switchIcon from "../../assets/icons/switch.png"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="controllers">
                <div className="icon">
                    <img src={switchIcon} alt="switch" />
                </div>
            </div>
        </div>
    );
}

export default Footer;