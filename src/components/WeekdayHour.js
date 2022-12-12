import { Link } from "react-router-dom"
import styled from "styled-components"
import { colorText } from "../Colors"

export default function WeekdayHour({ movie }) {
    return (
        <BoxHour>
            {movie.weekday} - {movie.date}
            <ButtonsBox>
                {movie.showtimes.map((w) => (
                    <Link to={`/assentos/${w.id}`} key={w.name}>
                        <button>{w.name}</button>
                    </Link>
                ))}
            </ButtonsBox>

        </BoxHour>

    )
}
const BoxHour = styled.div`
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       font-family: 'Roboto';
       font-size: 20px;
       color: ${colorText};
       padding:0 20px;
`
const ButtonsBox = styled.div`
    display: flex;
    margin: 20px 0;
    button{
        background: #E8833A;
        margin-right: 20px;
        width: 82px;
        height: 43px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 3px;
        border: none;
        color: #ffffff;

    }
    a{
        text-decoration: none;
    }
`