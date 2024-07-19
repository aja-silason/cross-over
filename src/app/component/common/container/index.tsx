import { FC, ReactNode } from "react";

interface chil {
    children: React.ReactNode;
    customClass?: string,
}

const Container: React.FC<chil> = ({children, customClass}) => {
    return (
        <div className={`md:px-[8em] md:py-[.5em] ${customClass}`}>
            {children}
        </div>
    )
}
export default Container;