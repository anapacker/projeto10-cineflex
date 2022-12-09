import styled from "styled-components"
import axios from 'axios'
import { useEffect, useState } from "react";

export default function ExplorePage() {
    const [images, setImages] = useState([])

    const posterURL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"

    useEffect(() => {
        const promise = axios.get(posterURL)
        promise.then(res => setImages(res.data))
        promise.catch(err => console.log(err.response.data))
    }, [])
    console.log("images: ", images)
    return (
        <BoxMovies>
            {images.map(image => (
                <StyledImage key={image.id}>
                    <img src={image.posterURL} alt={image.title} />
                </StyledImage>
            ))}

        </BoxMovies>
    )
}





const BoxMovies = styled.div`
    /* background-color: blue; */
    width: 100vw;
    /* height: 209px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top:15px;
    `

const StyledImage = styled.div`
    background-color:white;
    border-radius: 3px;
    width: 100px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    
    & > img {
        width: 100%;
    }
`
