import Image from "next/image";
import flagPortugal from "/public/flagPortugal.svg";
import flagUK from "/public/flaguk.svg";
import logotipo from "/public/logotipo_cross_over.svg";
import Link from "next/link";

const Header = () => {

    return (
        <span className="flex flex-col text-center">
            <span className="flex justify-between items-center">
                <span>
                    <Image src={logotipo} className="md:w-[202px] md:h-[68px]" alt="logotipoCrossOver"/>
                </span>
                <span className="flex justify-between gap-[2em] text-[14px] font-[500] text-white">
                    <Link href="#about" className="hover:text-[#1E90CE] h-6">Sobre Nós</Link>
                    <Link href="#service" className="hover:text-[#1E90CE] h-6">Serviços</Link>
                    <Link href="#product" className="hover:text-[#1E90CE] h-6">Produtos</Link>
                    <Link href="#contact" className="hover:text-[#1E90CE] h-6">Contactos</Link>
                </span>
                <span className="flex gap-[.3em]">
                    <Image src={flagPortugal} alt="portugal flag" className="md:w-[38px] md:h-[22px]"/>
                    <Image src={flagUK} alt="uk flag" className="md:w-[38px] md:h-[22px]"/>
                </span>
            </span>
        </span>
    )
}

export default Header;