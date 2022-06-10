import {LogoColorida, Logo, Main,Apresentation,Info1, Info2, Info3,BoxButtons, BtnAbout1, BtnAbout2, ImgAbout} from "./styled.js";
import Logoimg from "../../assets/images/avatar.gif"
export default function AboutPage(){
    return(
    <Main>
        <Apresentation>
            <Info1>Olá meu nome é</Info1>
            <Info2>
                <Logo>Yan <LogoColorida>Matheus</LogoColorida></Logo>
            </Info2>
            <Info3>Desenvolvedor Front-End & UX/UI Designer</Info3>
            <BoxButtons>
                <BtnAbout1>DOWNLOAD CV</BtnAbout1>
                <BtnAbout2>CONTATO</BtnAbout2>
            </BoxButtons>
        </Apresentation>
        <ImgAbout src={Logoimg}>
        </ImgAbout>
    </Main>
    );
};