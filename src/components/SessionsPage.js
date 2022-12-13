import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { colorText } from "../Colors"
import Footer from "../components/Footer"
import WeekdayHour from "./WeekdayHour"

export default function Sessions() {
    const { idFilme } = useParams()
    const [movie, setMovie] = useState(undefined)


    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        promise.then(res => setMovie(res.data))
    }, [])


    if (!movie) {
        return <div>Carregando...</div>
    }

    return (
        <BoxPage>
            Selecione o horário
            <DayStyled>
                {movie.days.map(m => (
                    <WeekdayHour movie={m} key={m.id} />
                ))}
            </DayStyled>

            <Footer
                image={movie.posterURL}
                title={movie.title}
            />
        </BoxPage>
    )
}

const BoxPage = styled.div`
    font-size:24px;
    font-family: 'Roboto';
    display: flex;
    justify-content: center ;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: ${colorText};
    padding-bottom:120px;
    margin-top: 10px;
    padding-top:40px;
    
`

const DayStyled = styled.div`
    width: 100vw;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 400;
    margin-left:24px;
    margin-top: 25px;
    
`
