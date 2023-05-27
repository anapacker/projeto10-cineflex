import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import validarCPF from "./validacao"

export default function SeatsPage() {
    const { idSessao } = useParams()
    const [assentosSelecionados, setAssentosSelecionados] = useState([])
    const [infoAssentos, setInfoAssentos] = useState({})
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")

    function reservarAssentos(event) {
        event.preventDefault()
        let dadosEnviarParaAPI = {
            name: name,
            cpf: cpf,
        }
        let arrayDeIds = []
        for (let i = 0; i < assentosSelecionados.length; i++) {
            arrayDeIds.push(assentosSelecionados[i].id)
        }
        dadosEnviarParaAPI.ids = arrayDeIds
        const promise = axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, dadosEnviarParaAPI)
        promise.then(() => {
            navigate(`/sucesso`)
        })
    }
    function selecionarAssentos(assentoClicado) {
        if (assentoClicado.isAvailable == false) {
            alert("Esse assento não esta disponivel")
            return
        }
        let assentosSelecionadosAtualizados = [];

        for (let i = 0; i < assentosSelecionados.length; i++) {
            if (assentoClicado.name == assentosSelecionados[i].name) {
                assentosSelecionadosAtualizados = assentosSelecionados.filter(assento => { return assento.name != assentoClicado.name })
                setAssentosSelecionados(assentosSelecionadosAtualizados)
                return
            }
        }

        setAssentosSelecionados([...assentosSelecionados, assentoClicado])
    }

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)

        promise.then(resposta => {
            setInfoAssentos(resposta.data)
        })
        promise.catch((erro) => {
            console.log(erro.response.data)
        })
    }, []);

    if (!infoAssentos.seats) {
        return (<div>carregando...</div>)
    }
    return (
        <PageContainer>
            Selecione o(s) assento(s)
            <div>
                <SeatsContainer>
                    {infoAssentos.seats.map(assento => {
                        let assentoEstaSelecionado = assentosSelecionados.some(assentoSelecionado => assentoSelecionado.name == assento.name)
                        console.log("assente esta selecionado", assentoEstaSelecionado)
                        return <SeatItem assentoEstaSelecionado={assentoEstaSelecionado} isAvailable={assento.isAvailable} key={assento.id} onClick={() => {
                            selecionarAssentos(assento)
                        }}>{assento.name}</SeatItem>
                    }

                    )}
                </SeatsContainer>
            </div>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle style={{ backgroundColor: '#1AAE9E' }} />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle style={{ backgroundColor: '#C3CFD9' }} />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle style={{ backgroundColor: '#FBE192' }} />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer onSubmit={reservarAssentos}>
                Nome do Comprador:
                <input placeholder="Digite seu nome..." value={name} onChange={e => setName(e.target.value)} required />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..." value={cpf} onChange={e => {
                    const inputCpf = e.target.value;
                    if (/^\d*$/.test(inputCpf) && inputCpf.length <= 11) {
                        setCpf(inputCpf);
                    }
                }} required
                />

                <button type="submit">Reservar Assento(s)</button>

            </FormContainer>

            <FooterContainer>
                <div>
                    <img src={infoAssentos.movie.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{infoAssentos.movie.title}</p>
                    <p>{infoAssentos.day.weekday} - {infoAssentos.name}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const SeatItem = styled.button`
    border: 1px solid blue;        // Essa cor deve mudar
    background-color: ${props => {
        if (props.assentoEstaSelecionado == true) return "#1AAE9E"
        return props.isAvailable ? "#C3CFD9" : "#FBE192"
    }} ;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`

const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid blue;         // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`