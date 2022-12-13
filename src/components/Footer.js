import styled from "styled-components"
import { colorBase } from "../Colors"

export default function Footer({ image, title, hour, weekday }) {
    return (
        <FooterContainer>
            <ImageContainer>
                <Image src={image} alt="poster" />
            </ImageContainer>
            <TitleContainer>
                <h3>{title}</h3>
                {weekday && hour && <p>{weekday} - {hour}</p>}
            </TitleContainer>
        </FooterContainer>

    )

}

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: ${colorBase};
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    align-items: center;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    margin: 12px;
`
const Image = styled.img`
    width: 48px;
    height: 72px;
    padding: 8px;
`
const TitleContainer = styled.div`
    
    h3{
        font-size:20px;
        text-align: left;
    }
    p{
        font-size:20px;
        text-align: left;
    }

`

