import { setSelectionRange } from "@testing-library/user-event/dist/utils"
import { useNavigate } from "react-router-dom"

export default function SeatsInfos() {
    const [info, setInfo] = useState({ name: "", cpf: "" })
    const navigate = useNavigate()

    function handleInfo(e) {
        const { name, value } = e.target
        setInfo({ ...info, [name]: value })
    }

    function buyTickets(e) {
        e.preventDefault()

        const body = {
            ids: seletedSeats.map(s => s.id),
            ...form

        }

        const info = {
            movie: sessionStorage.movie.title,
            date: sessionStorage.day.date,
            hour: sessionStorage.name,
            buyer: info.name,
            cpf: info.cpf,
            seats: selectedSeats.map(s => s.name)
        }

        const promise = axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, body)
        promise.then(res => {
            setSuccessInfo(info)
            setSelectedSeats([])
            navigate("/sucesso")

        })
        promise.catch(err => alert(err.respose.data))
    }
    return (
        <Info onSubmit={buyTickets}>
            Nome do Comoprador:
            <input
                name="name"
                value={info.name}
                onChange={handleInfo}
                placeholder="Digite seu nome"
                type="text"
            />

            <Info />
            )
}

            const Infos =