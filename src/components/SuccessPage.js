import axios from "axios"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function SuccessPage() {
    const storageInfos = localStorage.getItem("askljfklasf")
    const reserveInfos = JSON.parse(storageInfos)
    const navigate = useNavigate()
    return (
        <PedidoFeitoPage>
            <h4> Pedido feito<br />com sucesso!</h4>

            <PedidoInfos>
                <h5 data-test="movie-info">Filme e sessão</h5>
                <p>{reserveInfos.movieTitle}</p>
                <p>{reserveInfos.date} {reserveInfos.hour}</p>

                <h5 data-test="seats-info">Ingressos</h5>
                {reserveInfos.ids.map((id) => {
                    return (
                        <p key={id}>Assento: {id}</p>
                    )
                })}


                <h5 data-test="client-info">Comprador</h5>
                <p>Nome: {reserveInfos.name}</p>
                <p>CPF: {reserveInfos.cpf}</p>

                <button data-test="go-home-btn" onClick={() => {
                    const objectSent = {
                        ids: reserveInfos.ids,
                        name: reserveInfos.name,
                        cpf: reserveInfos.cpf
                    }
                    const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", objectSent)
                    promise.then(res => { alert("Assentos Reservados"); navigate("/") })
                    promise.catch(err => alert("Não foi possivel reservar"))
                }}>Voltar pra Home</button>

            </PedidoInfos>
        </PedidoFeitoPage>
    )

}

const PedidoFeitoPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    h4{
        color:#247A6B;
        font-size: 24px;
        font-weight: 700;
        padding: 20px 0;

    }

`
const PedidoInfos = styled.div`
    width: 100vw;
    font-family: 'Roboto';
    color: #293845;
    h5{
        font-weight: 700;
        padding-top:38px;
        font-size: 23px;
        margin-left: 20px;
    }
    p{
        padding-top:7px;
        font-size: 22px;
        margin-left: 20px;
    }
    button{
    width: 60%;
    height:42px;
    background-color:#E8833A;
    border-radius: 3px;
    border: none;
    color:white;
    font-family: 'Roboto';
    margin: 80px 0 111px 72px;
    }
    
`

