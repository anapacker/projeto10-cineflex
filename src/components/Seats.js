import { useEffect, useState } from "react"
import styled from "styled-components"
import { seatColors } from "../Colors"

export default function Seats({ seat, verificaDisponivel, isSelected }) {
    const isAvailable = () => {
        if (isSelected) {
            return ("selecionado")
        }
        if (seat.isAvailable) {
            return ("disponivel")
        }
        return ("indisponivel")
    }
    const [status, setStatus] = useState(isAvailable)





    useEffect(() => {
        if (isSelected) {
            setStatus("selecionado")
        } else if (seat.isAvailable) {
            setStatus("disponivel")
        } else {
            setStatus("indisponivel")
        }
    }, [isSelected, seat])
    return (
        <SeatItem data-test="seat" status={status} onClick={() => verificaDisponivel(seat)}>
            {seat.name}
        </SeatItem>
    )
}

const SeatItem = styled.div`
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