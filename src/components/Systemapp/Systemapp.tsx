import { useReactiveVar } from "@apollo/client";
import { selectedId } from "../../types/globalVariables";
import Title from "../Title/Title";
import "./Systemapp.scss"

interface SystemappProps {
    title: string;
}

const Systemapp = ({
    title,
}: SystemappProps) => {
    const systemapps: string = "systemapps";
    const selectedIdValue = useReactiveVar(selectedId);

    return (
        <div className={`Systemapp ${selectedIdValue == title}`}>
            <div className="bubble" onClick={() => selectedId(title)}>
                <div className="icon">
                    <img src={`${systemapps}/${title}.png`} alt={title} draggable="false" />
                </div>
                <Title title={title} visible={selectedIdValue == title} position="bottom" size="small"/>
            </div>
        </div>
    );
}

export default Systemapp;