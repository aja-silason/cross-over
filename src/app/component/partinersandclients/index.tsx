"use client";
import { useState } from "react";
import Container from "../common/container";
import Slider from "./Slider";
import Marquee from "./Slider";
import Image from "next/image";
import sonagas from "/public/sonagaslogo.svg";
import mstelecom from "/public/mstelecomlogo.svg";
import sonair from "/public/sonairlogo.svg";
import isptec from "/public/ispteclogo.svg";
import sonangol from "/public/sonangollogo.svg";
import ende from "/public/endelogo.svg";
import sonangolLogistica from "/public/sonangollogisticalogo.svg";
import camgif from "/public/cam_gif.gif";

const PartinerAndClients = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const toggleContent = () => {
        setIsVisible(!isVisible);
    };

    return (
        <span className="flex flex-col w-full gap-[1em] md:my-[2em]">
            <span className="flex flex-col items-center">
                <Image src={camgif} alt="cam gif" width={48} height={48}/>
                <p className="font-[600] tex-[24px]">Empresas que confiam em nós</p>
            </span>
            <Container customClass="flex justify-between items-center overflow">
                <Image src="/sonagaslogo.svg" alt="sonagas logotipo" width={10} height={10} className="w-[8em]"/>
                <Image src="/mstelecomlogo.svg" alt="mstelecom logotipo" width={10} height={10} className="w-[8em]"/>
                <Image src="/sonairlogo.svg" alt="sanair logotipo" width={10} height={10} className="w-[6em]"/>
                <Image src="/ispteclogo.svg" alt="isptec logotipo" width={10} height={10} className="w-[8em]"/>
                <Image src="/sonangollogo.svg" alt="sonangol logotipo" width={10} height={10} className="w-[8em]"/>
                <Image src="/sonangollogisticalogo.svg" alt="sonangol logistica logotipo" width={10} height={10} className="w-[8em]"/>
            </Container>
        </span>
    )
}
export default PartinerAndClients;