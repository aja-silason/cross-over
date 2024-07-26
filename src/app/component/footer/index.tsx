import Image from "next/image";
import Container from "../common/container";
import Link from "next/link";

const Footer = () => {
    return (
        <Container customClass="md:py-[2em]">
            <span className="flex justify-between md:py-[5em]">
                <span className="flex gap-[1em] md:w-[40%] items-center">
                    <span>
                        <Image src="image/email.svg" width={0} height={0} alt="email" className="md:w-[4em]"/>
                    </span>
                    <span>
                        <p className="font-[200] text-[#A1A1AA] text-[10pt]">Newsletter</p>
                        <h1 className="text-[#0D0D0D] font-[700] text-[12pt]">Receba conteúdos inéditos e novidades gratuitamente</h1>
                    </span>
                </span>

                <span className="flex items-center gap-[.5em]">
                    <span className="bg-[#F1F8FE] border flex gap-[.5em] px-[.5em] rounded-[8px]">
                        <Image src="image/emaillogo.svg" width={0} height={0} alt="email" className="md:w-[1em]"/>
                        <input type="text" placeholder="Digite o seu email" className="border-none md:py-[.5em] md:px-[.2em] bg-transparent"/>
                    </span>
                    <span>
                        <button className="bg-[#1D87C5] text-white p-[.5em] rounded-[8px] hover:bg-[#1d78ac]">Enviar</button>
                    </span>
                </span>
            </span>
            <span className="flex items-center justify-center">
                <Image src="image/Gradient_bar.svg" width={0} height={0} alt="email" className="md:w-[10em]"/>
            </span>
            <span className="flex justify-between md:py-[2em]">
                <span className="flex flex-col md:gap-[2em] justify-end items-start">
                    <Image src="image/Cross_black.svg" width={0} height={0} className="md:w-[250px]" alt="instagram"/>
                    <span className="flex gap-[1em]">
                        <Image src="image/Instagram.svg" width={0} height={0} className="md:w-[30px]" alt="instagram"/>
                        <Image src="image/Facebook.svg" width={0} height={0} className="md:w-[30px]" alt="facebook"/>
                        <Image src="image/Twitter.svg" width={0} height={0} className="md:w-[30px]" alt="instagram"/>
                    </span>
                </span>
                <span className="flex gap-[4em]">
                    <span className="text-[10pt] font-[300]">
                        <p className="hover:text-[#1E90CE] cursor-pointer">Sobre nós</p>
                        <p className="hover:text-[#1E90CE] cursor-pointer">Nossos serviços</p>
                        <Link href="#about">About</Link>
                    </span>
                </span>
            </span>
            <hr />
            <span className="flex justify-between md:py-[1em] md:text-[5pt]">
                <span>
                    <span className="flex gap-[1em] text-[10pt] font-[300]">
                        <p>&copy; 2024 Cross Over - Todos direitos reservados.</p>
                    </span>
                </span>
                <span>
                    <span className="flex gap-[1em] text-[10pt] font-[300]">
                        <p>Termos de Serviços</p>
                        <p>Puliticas de privacidade</p>
                    </span>
                </span>
            </span>
        </Container>
    )
}   

export default Footer;