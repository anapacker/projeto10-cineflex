import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

export default function SuccessPage() {
    const location = useLocation()
    const infos = location.state

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer data-test="movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{infos.filme}</p>
                <p>{infos.sessao}</p>
            </TextContainer>

            <TextContainer data-test="seats-info">
                <strong><p>Ingressos</p></strong>
                {infos.ingressos.map(assento =>
                    <p key={assento}>Assento {assento}</p>

                )}

            </TextContainer>

            <TextContainer data-test="client-info">
                <strong><p>Comprador</p></strong>
                <p>Nome: {infos.nome}</p>
                <p>CPF: {infos.cpf}</p>
            </TextContainer>
            <Link to={`/`} data-test="go-home-btn">
                <button>Voltar para Home</button>

            </Link>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
        width: 225px;
        height: 42px;
        color: #FFFFFF;
        background: #E8833A;
        border-radius: 3px;
        border: none;
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 0;
    }
    p{
        margin: 3px;
    }
`