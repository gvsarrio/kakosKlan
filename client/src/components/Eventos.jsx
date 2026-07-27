import {useState, useEffect} from 'react'

function Eventos() {
    const [eventos, setEventos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/eventos')
        .then((res) => res.json())
        .then((data) => setEventos(data))
    }, [])

    return (
        <ul>
            {eventos.map((evento) => (
                <li key={evento.fecha}>
                    {evento.fecha} - {evento.lugar}
                </li>
            ))}
        </ul>
    )
}

export default Eventos