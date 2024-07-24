import ServiceCard from "../cards/servicescard";
import Container from "../common/container";
import style from "../../../../style/index.module.css";

const Service = () => {
    return (
        <Container customClass={`md:py-[4em] flex flex-col md:gap-[10em] ${style.back}`}>
            <span className="flex flex-col md:gap-[2em]">
                <span className="flex flex-col items-center">
                    <h1 className="font-[800] text-[#0D0D0D] text-[25pt]">Nossos Serviços</h1>
                </span>
                <span className="flex justify-between">
                    <ServiceCard img="image/cctv-camera.svg" title="CCTV (Closed-Circuit Television)" text="Temos para si, as melhores e mais evoluídas soluções de vídeo vigilância, para que a monitorização do seu espaço seja uma realidade. Encontrarás aqui, ou analógicos. Oferecemos ainda a possibilidade de integração com outros sistemas de proteção."/>

                    <ServiceCard img="image/square-lock-password.svg" title="Sistemas Avançados de Detecção de Intrusão" text="Temos para si, as melhores e mais evoluídas soluções de vídeo vigilância, para que a monitorização dia à dia do seu espaço seja uma realidade. Encontrarás aqui, ou analógicos. Oferecemos ainda a possibilidade de integração com outros sistemas de proteção."/>
                    
                    <ServiceCard img="image/security-lock.svg" title="Controlo de Acesso" text="Temos para si, as melhores e mais evoluídas soluções de vídeo vigilância, para que a monitorização dia à dia do seu espaço seja uma realidade. Encontrarás aqui, ou analógicos. Oferecemos ainda a possibilidade de integração com outros sistemas de proteção."/>
                    
                    <ServiceCard img="image/fire-security.svg" title="Detecção e Alarme de Incêncdio" text="Temos para si, as melhores e mais evoluídas soluções de vídeo vigilância, para que a monitorização dia à dia do seu espaço seja uma realidade. Encontrarás aqui, ou analógicos. Oferecemos ainda a possibilidade de integração com outros sistemas de proteção."/>
                </span>
            </span>
            <span className="flex flex-col justify-center items-center md:gap-[2em]">
                <span>
                    <h1 className="font-[800] text-[25pt]">Porque escolher a CrossOver ?</h1>
                </span>
                <span>
                    <p>Porque somos uma empresa comprometida com a inovação inteligente e segura para os clientes. A nossa parceira com empresas lideres no mercado internacional como à Axis Comunication, empresa líder da indústria em vigilância por vídeo, que desenvolve e fornece soluções de rede inovadoras que melhoram a segurança e o desempenho empresarial. A CroosOver, oferece soluções de rede em vigilância por vídeo, controle de acesso, controlo anti-intrusão, Incêndio. Eles são aprimorados por aplicativos de análise inteligente e apoiados por treinamento de alta excelência na solução de vigilância por vídeo, controle de acesso, interfone, e sistemas de áudio.</p>
                </span>
                
                <span className="w-[100%] border h-[60vh] rounded-[.5em]">Video</span>

            </span>
        </Container>
    )
}

export default Service;