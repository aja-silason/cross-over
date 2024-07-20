import Image from "next/image";

const Card = (text: string) => {
    return(
        <span className="border md:w-[360px] md:h-[345px] flex flex-col">
            <span className="flex justify-end p-[.5em]">
                <span className="flex border rounded-[5px] items-center gap-[.5em] md:px-[.5em] md:py-[.2em]">
                    <p className="font-[500]">CrossOver</p>
                    <Image src="iconCross_over.svg" width={45} height={45} className="md:w-[30px] md:h-[30px]" alt="mission logotipo"/>
                </span>
            </span>
            <span className="flex flex-col md:gap-[3em] md:p-[2em]">
                <span className="flex flex-col gap-[1em]">
                    <span>
                        <Image src={"iconVision.svg"} width={60} height={60} className="md:w-[56px] md:h-[56px]" alt="vision logotipo"/>
                    </span>
                    <span className="font-[500]">{Visão}</span>
                </span>
                <span className="opacity-50">{text}</span>
            </span>
        </span>
    )
}

export default Card;;