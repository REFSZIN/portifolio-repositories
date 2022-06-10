import {Header, BoxLogo, BoxContact, Chave, Logo, BoxPages, Page, Contact } from "./styled.js";
import { Link } from "react-router-dom";
export default function GlobalHeader (){
    return(
        <Header>
            <Link to="/">
                <BoxLogo>
                    <Chave>&#60;</Chave>
                        <Logo>Yan Matheus</Logo>
                    <Chave>/&#62;</Chave>
                </BoxLogo>
            </Link>
            <BoxPages>
                <Link to="/">
                    <Page>Sobre</Page>
                </Link>
                <Link to="/Projets">
                    <Page>Projetos</Page>
                </Link>
                <Link to="/Technology">
                    <Page>Tecnologias</Page>
                </Link>
                <BoxContact>
                    <Link to="/Contact">
                        <Contact>Contato</Contact>
                    </Link>
                </BoxContact>
            </BoxPages>
        </Header>
    );
};
