import styled from "styled-components"
import axios from 'axios'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieStyled from "./MovieStyled";
import { colorText } from "../Colors";


export default function HomePage() {
    const [movies, setMovie] = useState([])


    useEffect(() => {
        const posterURL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        const promise = axios.get(posterURL)
        promise.then(res => setMovie(res.data))
        promise.catch(err => console.log(err.response.data))
        console.log("rodei o useEffect")
    }, [])


    if (movies.length === 0) {
        return <div>Carregando...</div>
    }

    return (
        <>
            <BoxPage>
                Selecione o filme
                <BoxMovies>
                    {movies.map(m => (
                        <Link to={`/sessoes/${m.id}`} key={m.id}>
                            <MovieStyled posterURL={m.posterURL} />
                        </Link>
                    ))}

                </BoxMovies>
            </BoxPage>
        </>

    )
}





const BoxMovies = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    `


const BoxPage = styled.div`
    font-size:24px;
    font-family: 'Roboto';
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: center ;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color:${colorText};
         
`
