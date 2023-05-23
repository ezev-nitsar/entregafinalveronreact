import { useState, useEffect } from 'react'
export const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [confirmaEmail, setConfirmaEmail] = useState('')
    const [submitEnable, setSubmitEnable] = useState(false)
    const [cumpleRequisitoNombre, setCumpleRequisitoNombre] = useState(false)
    const [cumpleRequisitoTelefono, setCumpleRequisitoTelefono] = useState(false)
    const [cumpleRequisitoEmail, setCumpleRequisitoEmail] = useState(false)
    const [claseBtnSubmit, setClaseBtnSubmit] = useState('btn btn-outline-danger w-100')
    useEffect(() => {
        if (nombre.length >= 8) {
            setCumpleRequisitoNombre(true)
        } else {
            setCumpleRequisitoNombre(false)
        }
    }, [nombre])

    useEffect(() => {
        if (telefono.length >= 8 && !isNaN(telefono)) {
            setCumpleRequisitoTelefono(true)
        } else {
            setCumpleRequisitoTelefono(false)
        }
    }, [telefono])

    useEffect(() => {
        if (email === confirmaEmail && email.length >= 8) {
            setCumpleRequisitoEmail(true)
        } else {
            setCumpleRequisitoEmail(false)
        }
    }, [email, confirmaEmail])

    useEffect(() => {
        if (cumpleRequisitoNombre && cumpleRequisitoTelefono && cumpleRequisitoEmail) {
            setSubmitEnable(true)
            setClaseBtnSubmit('btn btn-success w-100');
        } else {
            setSubmitEnable(false)
            setClaseBtnSubmit('btn btn-outline-danger w-100');
        }
    }, [cumpleRequisitoNombre, cumpleRequisitoTelefono, cumpleRequisitoEmail])

    const handleConfirm = (event) => {
        event.preventDefault()

        const datosUsuario = {
            nombre, telefono, email
        }
        onConfirm(datosUsuario)
    }

    return (
        <div className='container'>
            <form onSubmit={handleConfirm}>
                <label>Nombre</label>
                <input type='text' name='nombre' placeholder='(tu nombre completo tal como figura en tu DNI)' value={nombre} onChange={({ target }) => setNombre(target.value)} className='form form-control' autoComplete='off' />
                <label>Teléfono</label>
                <input type='text' name='telefono' placeholder='(tu teléfono, sólo números sin guiones)' value={telefono} onChange={({ target }) => setTelefono(target.value)} className='form form-control' autoComplete='off' />
                <label>E-Mail</label>
                <input type='text' name='email' placeholder='(tu e-mail)' value={email} onChange={({ target }) => setEmail(target.value)} className='form form-control' autoComplete='off' />
                <label>Confirma E-Mail</label>
                <input type='text' name='confirma-email' placeholder='(tu e-mail nuevamente)' value={confirmaEmail} onChange={({ target }) => setConfirmaEmail(target.value)} className='form form-control' autoComplete='off' />
                <div className='mt-3'>
                    <input type='submit' value='Enviar' className={claseBtnSubmit} disabled={!submitEnable} />
                </div>
            </form>
        </div>
    )
}