import Header from "../common/header"
import Container from "../common/container"
import Style from "../../../../style/index.module.css";

const HeaderSection = () => {
    return (
        <div className="">
        <Container customClass={`md:h-[100vh] background ${Style.background}`}>
            <span className="flex flex-col md:h-[98vh]">
                <Header/>
                <span className="flex flex-col text-center justify-center items-center md:h-full">
                    <h1 className="md:text-[65px] font-[800] text-white text-grad from-black to-black py-4 px-6 rounded-lg">Inovação com Inteligência e Segurança</h1>
                    <span className="md:w-[820px]">
                        <p className="md:text-[11.8pt] font-[500] text-white">Na CrossOver, combinamos inovação tecnológica com expertise em segurança para proteger o que é mais importante para você. Nossas soluções integradas oferecem tranquilidade e confiança, adaptando-se às suas necessidades específicas. Descubra como podemos transformar sua segurança hoje mesmo.</p>
                    </span>
                </span>
            </span>
        </Container>
        </div>
    )
}

export default HeaderSection;