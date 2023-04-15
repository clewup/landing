import React, {FC} from "react";

interface HeadingProps {
    title: string;
    subtitle: string;
}

const Heading: FC<HeadingProps> = ({title, subtitle}) => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-lime-400">{title}</h1>
            <p className={"text-4xl -translate-y-3"}>{subtitle}</p>
        </div>
    )
}
export default Heading;