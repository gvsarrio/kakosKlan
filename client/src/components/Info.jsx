import {useState} from 'react'

function Info() {
    const [expandido, setExpandido] = useState(false)

    return (
        <div>
            <p>Una obra de teatro que se representa en tu propia casa</p>
            {expandido && (
                <p>Aquí iría el texto largo con más detalles sobre la obra</p>
            )}
            <button onClick={() => setExpandido(!expandido)}>
                {expandido ? 'Leer menos' : 'Leer más'}
            </button>
        </div>
    )
}

export default Info