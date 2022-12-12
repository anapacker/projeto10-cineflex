import styled from "styled-components"

export default function MovieStyled({ posterURL }) {
    return (
        <StyledImage>
            <img src={posterURL} />
        </StyledImage>
    )
}





const StyledImage = styled.div`
    background-color:white;
    border-radius: 3px;
    width: 145px;
    height: 209px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin:15px;
    cursor: pointer;
    & > img {
        width: 129px;
        object-fit: cover;
    }
    
`