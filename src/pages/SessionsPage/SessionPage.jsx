import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

export default function SessionsPage() {
    const { idFilme } = useParams();
    const [sessoes, setSessoes] = useState({})
    const navigate = useNavigate()

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)

        promise.then(resposta => {
            setSessoes(resposta.data)
        })
        promise.catch((erro) => {
            console.log(erro.response.data)
        })
    }, []);

    if (!sessoes.days) {
        return (<div>carregando...</div>)
    }

    return (
        <PageContainer>
            Selecione o horário
            <div>
                {sessoes.days.map(sessao =>
                    <SessionContainer data-test="movie-day" key={sessao.id}>
                        {sessao.weekday} - {sessao.date}
                        <ButtonsContainer>
                            {sessao.showtimes.map((horario) => <button data-test="showtime" key={horario.id} onClick={() => { navigate(`/assentos/${horario.id}`) }}>{horario.name}</button>)}

                        </ButtonsContainer>

                    </SessionContainer>
                )}
            </div>

            <FooterContainer data-test="footer">
                <div>
                    <img src={sessoes.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{sessoes.title}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`
const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        width: 83px;
        height: 43px;
        margin-right: 20px;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        color: #FFFFFF;
    }
    a {
        text-decoration: none;
    }
`
const FooterContainer = styled.div`
    width: 100vw;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    z-index: 1;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px;
        p {
            margin: 0 5px;
            font-size: 26px;
            text-align: left;
            &:nth-child(2) {
            }
        }
    }
`