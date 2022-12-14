import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { colorText, seatColors } from "../Colors";
import Seats from "../components/Seats"
import Footer from "./Footer";

export default function SeatsPage() {
    const { idSessao } = useParams()
    const [session, setSession] = useState([])
    const [selectedSeats, setSelectedseats] = useState([])
    const [userInfos, setUserInfos] = useState({ name: "", cpf: "" })
    const navigate = useNavigate()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        promise.then(res => setSession(res.data))
    }, [])

    function verificaDisponivel(seat) {
        if (seat.isAvailable === false) {
            alert("Esse assento não está disponível")
        } else {
            const isSelected = selectedSeats.some(c => seat.id === c.id)
            if (isSelected) {
                const newSeats = selectedSeats.filter(c => seat.id !== c.id)
                setSelectedseats(newSeats)
            } else {
                setSelectedseats([...selectedSeats, seat])
            }
        }
    }
    if (session.length === 0) {
        return (
            <div>Carregando...</div>
        )
    }


    return (
        <Container>
            Selecione o(s) assento(s)

            <SeatContainer>
                {session.seats.map(s => (
                    <Seats
                        seat={s}
                        key={s.id}
                        verificaDisponivel={verificaDisponivel}
                        isSelected={selectedSeats.some(c => s.id === c.id)}

                    />

                ))}


            </SeatContainer>
            <StatusContainer>
                <StatusItem>
                    <StatusSeats status="selecionado" />
                    Selecionado
                </StatusItem>
                <StatusItem>
                    <StatusSeats status="disponivel" />
                    Disponível
                </StatusItem>
                <StatusItem>
                    <StatusSeats status="indisponivel" />
                    Indisponível
                </StatusItem>
            </StatusContainer>


            <Info>
                <p>Nome do Comprador:</p>
                <input data-test="client-name" value={userInfos.name}
                    name="name"
                    placeholder="Digite seu nome"
                    type="text"
                    onChange={(event) => {
                        setUserInfos({ ...userInfos, name: event.target.value })
                    }}
                />
                <p>CPF do Comprador:</p>
                <input data-test="client-cpf" value={userInfos.cpf}
                    name="cpf"
                    placeholder="Digite seu cpf"
                    type="number"
                    min="1"
                    max="99999999999"
                    onChange={(event) => {
                        setUserInfos({ ...userInfos, cpf: event.target.value })
                    }}
                />

                <button data-test="book-seat-btn" onClick={() => {
                    const idAssentosSelecionados = []
                    for (let i = 0; i < selectedSeats.length; i++) {
                        idAssentosSelecionados.push(selectedSeats[i].name)
                    }

                    const objetcToSave = {
                        ids: idAssentosSelecionados,
                        name: userInfos.name,
                        cpf: userInfos.cpf,
                        movieTitle: session.movie.title,
                        date: session.day.date,
                        hour: session.name
                    }
                    if (objetcToSave.ids.length === 0) {
                        return (alert("Você precisa selecionar um assento."))
                    }
                    if (objetcToSave.name === "") {
                        return (alert("Você precisa preencher um nome válido"))
                    }
                    if (objetcToSave.cpf.length !== 11) {
                        return (alert("Você precisa digitar um cpf válido."))
                    }
                    localStorage.setItem("askljfklasf", JSON.stringify(objetcToSave))
                    navigate("/sucesso")
                }}>
                    Reservar Assento(s)
                </button>

            </Info>
            <Footer
                title={session.movie.title}
                image={session.movie.posterURL}
                weekday={session.day.weekday}
                hour={session.name}
            />
        </Container>
    )
}


const Container = styled.div`
    color: ${colorText};
    margin-top: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto';
    padding-top: 30px;
    padding-bottom: 120px;
`

const SeatContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;
    flex-direction: row;
`
const StatusContainer = styled.div`
    width: 70%;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 10px;
`

const StatusSeats = styled.div`
    height:26px;
    width: 26px;
    display: flex;
    border-radius: 26px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => seatColors[props.status].border};
    background-color: ${props => seatColors[props.status].background};
    margin: 5px 3px;

`
const StatusItem = styled.div`
    font-size: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Info = styled.form`
    width: 100%;
    padding: 5%;
    input{
        width: 100%;
        height: 51px;
        border: 1px solid #D4D4D4;
        outline: none;
        border-radius:3px;
        margin:7px 0;
    }
    button{
        width: 60%;
        height:42px;
        background-color:#E8833A;
        border-radius: 3px;
        border: none;
        color:white;
        font-family: 'Roboto';
        margin-top:20px;
        
    }
`