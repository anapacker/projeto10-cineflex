import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SuccessPage() {
    const storageInfos = localStorage.getItem("askljfklasf")
    const reserveInfos = JSON.parse(storageInfos)
    const navigate = useNavigate()
    return (
        <>
            <h4>Pedido feito<br />com sucesso!</h4>
            <h5>Filme e sessão</h5>
            <p>{reserveInfos.movieTitle}</p>
            <p>{reserveInfos.date} {reserveInfos.hour}</p>

            <h5>Ingressos</h5>
            {reserveInfos.ids.map((id) => {
                return (
                    <p key={id}>Assento: {id}</p>
                )
            })}


            <h5>Comprador</h5>
            <p>Nome: {reserveInfos.name}</p>
            <p>CPF: {reserveInfos.cpf}</p>
            <button onClick={() => {
                const objectSent = {
                    ids: reserveInfos.ids,
                    name: reserveInfos.name,
                    cpf: reserveInfos.cpf
                }
                const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", objectSent)
                promise.then(res => { alert("Assentos Reservados"); navigate("/") })
                promise.catch(err => alert("Não foi possivel reservar"))
            }}>confirmar</button>
        </>

    )
}