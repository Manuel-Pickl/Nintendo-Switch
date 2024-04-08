import { useEffect, useRef, useState } from "react";
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
    const titleRef = useRef<HTMLDivElement>(null);
    const [scrollTitle, setScollTitle] = useState<boolean>(false);

    useEffect(() => {
        if (titleRef.current) {
            const titleWidth = titleRef.current.offsetWidth;
            const maxWidth =  window.innerHeight * 0.6;
            const titleExceedsLimit = titleWidth >= maxWidth;

            if (titleExceedsLimit) {
                setScollTitle(true);
            }
        }
    }, [title]); 

    return (
        <div className={`Title ${visible ? "visible" : ""} ${scrollTitle ? "scroll" : ""}`}>
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