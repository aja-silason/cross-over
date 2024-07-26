"use client";
import { useState } from "react";
import Container from "../common/container";
import Image from "next/image";
// import camgif from "/public/cam_gif.gif";

const PartinerAndClients = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const toggleContent = () => {
        setIsVisible(!isVisible);
    };

    return (
        <span className="flex flex-col w-full gap-[1em] md:my-[1em] items-center">
            <p className="font-[600] tex-[24px]">Empresas que confiam em nós</p>
            <Container customClass="flex justify-between items-center overflow">
                <Image src="/image/axis_logo.svg" alt="sonagas logotipo" width={10} height={10} className="w-[8em]"/>
            </Container>
        </span>
    )
}
export default PartinerAndClients;