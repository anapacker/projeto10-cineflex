import styled from "styled-components"
import { seatColors } from "../Colors"

export default function Status() {
    return (
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
    )
}

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