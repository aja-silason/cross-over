import Image from "next/image";
import Container from "../common/container";
import Card from "../cards";

const About = () => {
    return (
        <Container customClass="md:my-[10em] flex flex-col md:gap-[6em]">
            <span className="flex justify-between">
                <span className="w-[50%]">
                    <Image src="cardImage.svg" width={10} height={10} className="md:w-[600px] md:h-[350px]" alt="background"/>
                </span>
                <span className="w-[50%]">
                    <span className="border md:px-[1em] md:py-[.5em] rounded-[10px] border-gray-500 font-[600] text-[14px]">Sobre Nós</span>
                    <h1 className="font-[800] text-[60px]">CrossOver</h1>
                    <span className="flex flex-col gap-[1em]">
                        <p className="text-[14px] text-[#A1A1AA]">É uma empresa de capital 100% angolano, com foco em inovações inteligente e seguras a nível do SIS (Sistema Integrado de Segurança) com profissionais qualificados e especializados, somos um valor acrescentado a nível dos materiais ligados ao SIS e em oferecer soluções de ponta que garantem a segurança e a tranquilidade dos nossos clientes.</p>
                        <p className="text-[14px] text-[#A1A1AA]">Nosso diferencial está no uso de materiais de alta qualidade e na constante busca por tecnologias inovadoras, proporcionando um valor agregado incomparável aos sistemas de segurança. Estamos aqui para atender às suas necessidades de segurança com excelência. Entre em contato conosco e descubra como podemos proteger o que é mais importante para você.</p>
                    </span>
                </span>
            </span>
            <span className="flex justify-between gap-[2em]">
                <Card title="Visão" text="Levar a tecnologia e segurança cada vez mais próximo do cliente"/>
                <Card title="Missão" text="Ser referência no mercado Nacional em soluções inovadoras a nível do sistema integrado de segurança."/>
                <Card title="Valores" text="Confiança, Integrada e respeito, foco no resultado, Valorização"/>
            </span>
        </Container>
    )
}

export default About;