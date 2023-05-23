import { useState, useEffect } from 'react'
export const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [confirmaEmail, setConfirmaEmail] = useState('')

    useEffect( () => {
        if (nombre.length > 8) {

        } else {
            
        }
    }, [nombre])

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
                    <input type='submit' value='Enviar' className='btn btn-outline-success w-100' />
                </div>
            </form>
        </div>
    )
}