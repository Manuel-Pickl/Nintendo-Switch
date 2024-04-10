import { useEffect, useRef, useState } from "react";
import "./Title.scss"
import { vhToPx } from "../../services/UnitService";

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
    const titleRef = useRef<HTMLDivElement>(null);
    const [scrollTitle, setScollTitle] = useState<boolean>(false);
    const maxWidthInVh = 55;

    useEffect(() => {
        if (titleRef.current) {
            const titleWidth = titleRef.current.offsetWidth;
            const maxWidth =  vhToPx(maxWidthInVh);

            
            const titleExceedsLimit = titleWidth >= maxWidth;
            if (titleExceedsLimit) {
                setScollTitle(true);
            }
        }
    }, [title]); 

    return (
        <div className={`Title ${visible && "visible"} ${scrollTitle && "scroll"}`} style={{"--max-width": `${maxWidthInVh}vh` } as React.CSSProperties}
        >
            <div className={`title-container ${position} ${size}`}>
                <div className="title" ref={titleRef}>
                    <span>{title}</span>
                    {scrollTitle &&
                        <span>{title}</span>
                    }
                </div>
            </div>
        </div>
    );
}

export default Title;