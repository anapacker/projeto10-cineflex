import styled from "styled-components"
import imgMovie from "../src/image3.png"

export default function Movies() {
    return (
        <>
            <div>

                <BoxMovies>
                    <img src={imgMovie} alt="imgMovie" />
                </BoxMovies>

            </div>
        </>

    )
}





const BoxMovies = styled.div`
    background-color: blue;
    width: 145px;
    height: 209px;
    display: flex;
    justify-content: center;
    margin-top:15px;
    background-color:white;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
        img{
            width: 140px;
            padding: 8px;
        }
`