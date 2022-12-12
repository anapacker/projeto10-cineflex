import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { colorText } from "../Colors";
import Seats from "../components/Seats"
import Footer from "./Footer";
import Status from "./Status";

export default function SeatsPage() {
    const { idSessao } = useParams()
    const [session, setSession] = useState(undefined)
    const [selectedSeats, setSelectedseats] = useState([])

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        promise.then(res => setSession(res.data))
    }, [])
    console.log(session)

    function handleSeats(seat) {
        if (seat.disponivel === false) {
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

    if (!session) {
        return (
            <div>Carregando...</div>
        )
    }

    return (
        <Container>
            Selecione o(s) assento(s)

            <SeatContainer>
                {session.seat.map(seat => (
                    <Seats
                        seat={seat}
                        key={seat.id}
                        handleSeats={handleSeats}
                        isSelected={selectedSeats.some(c => seat.id === c.id)}

                    />
                ))}


            </SeatContainer>
            <Status />
            <Footer>
                title={session.movie.title}
                image={session.movie.posterURL}
                weekday={session.day.weekday}
                hour={session.name}
            </Footer>
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
    padding-top: 70px;
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