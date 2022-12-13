import axios from "axios"

export default function SuccessPage() {
    const storageInfos = localStorage.getItem("askljfklasf")
    const reserveInfos = JSON.parse(storageInfos)
    return (
        <>
            <p>{reserveInfos.name}</p>
            <button onClick={() => {
                const objectSent = {
                    ids: reserveInfos.ids,
                    name: reserveInfos.name,
                    cpf: reserveInfos.cpf
                }
                const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", objectSent)
                promise.then(res => alert("Assentos Reservados"))
                promise.catch(err => alert("Não foi possivel reservar"))
            }}>confirmar</button>
        </>

    )
}