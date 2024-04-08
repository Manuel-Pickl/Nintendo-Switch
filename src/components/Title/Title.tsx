import "./Title.scss"

interface TitleProps {
    title: string;
    visible: boolean;
    position?: "top" | "bottom";
    size?: "big" | "small";
}

const Title = ({
    title,
    visible,
    position = "top",
    size = "big",
}: TitleProps) => {
    return (
        <div className={`Title ${visible}`}>
            <div className={`title-container ${position} ${size}`}>
                <div className="title">
                    <span>{title}</span>
                    {/* <span>{title}</span> */}
                </div>
            </div>
        </div>
    );
}

export default Title;