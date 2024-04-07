import "./Systemapp.scss"

interface SystemappProps {
    title: string;
}

const Systemapp = ({
    title,
}: SystemappProps) => {
    const systemapps: string = "systemapps";

    return (
        <div className={`Systemapp true`}>
            <div className="title-container">
                <div className="title">
                    <span>{title}</span>
                </div>
            </div>
            <div className="icon"
            // onClick={() => select(title)}
            >
                <img src={`${systemapps}/${title}.png`} alt={title} />
            </div>
        </div>
    );
}

export default Systemapp;