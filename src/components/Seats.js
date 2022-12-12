import { useEffect, useState } from "react"
import styled from "styled-components"
import { seatColors } from "../Colors"

export default function Seats({ seats, handleSeats, isSelected }) {
    const [status, setStatus] = useState("selected")

    useEffect(() => {
        if (isSelected) {
            setStatus("selecionado")
        } else if (seatColors.disponivel) {
            setStatus("disponível")
        } else {
            setStatus("indisponível")
        }
    }, [isSelected, seats])
    return (
        <SetSeat status={status} onClick={() => handleSeats(seats)}>
            {seats.name}
        </SetSeat>
    )
}

const SetSeat = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 5px;
    border: 1px solid ${props => seatColors[props.status].border};
    background-color: ${props => seatColors[props.status].background};
`