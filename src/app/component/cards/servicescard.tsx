'use client';
import Image, { ImageProps } from "next/image";
import React from "react";

type proprieties = {
    img?: any,
    title?: string,
    text?: string,
} 

const ServiceCard = (props: proprieties) => {
    return (
        <span className="flex flex-col gap-[1em] md:w-[25%]">
            <span>
                <Image width={0} height={0} src={props.img} alt="" className="w-[2em]"/>
            </span>
            <span className="font-[600] w-[70%]">
                {props.title}
            </span>
            <span className="text-[9pt] w-[70%] text-justify">
                {props.text}
            </span>
        </span>
    )
}

export default ServiceCard;