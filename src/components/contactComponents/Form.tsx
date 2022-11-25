import { ButtonForm } from './ButtonForm'
import { TextAreaInput } from './TextAreaInput'
import { InputForm } from './InputForm'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export const Form: Function = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    function sendEmail(event: any) {

        if (nome && email && assunto && mensagem !== '') {
            event.preventDefault()

            const public_key = "FyLGXJZXmECsKKWBn"
            const serviceID = "service_uz1j53u"
            const templateId = "template_8qs20ry"

            const templateParams = {
                from_name: nome.toUpperCase,
                assunt_message: assunto,
                message: mensagem,
                email: email,
            }

            emailjs.send(serviceID, templateId, templateParams, public_key)
                .then((response) => {
                    console.log('Email Enviado com sucesso', response.status, response.text)
                }, (err) => {
                    console.error(err)
                })

            alert('Mensagem enviada com sucesso. Aguarde a resposta no email informado no formulário!')

            setNome('')
            setAssunto('')
            setEmail('')
            setMensagem('')

        } else {
            event.preventDefault()
            alert('Ainda há campos para preencher!')
        }
    }


    return (
        <form className="form form-mobile" onSubmit={sendEmail}>

            <h1>Entre em contato</h1>

            <InputForm
                title='Nome'
                type='text'
                name='nome'
                onChange={(event: any) => setNome(event.target.value)}
                placeholder='Digite seu nome completo...'
                value={nome}

            />

            <InputForm
                title='Email'
                type='email'
                name='email'
                onChange={(event: any) => setEmail(event.target.value)}
                placeholder='Digite seu melhor e-mail...'
                value={email}
            />

            <InputForm
                title='Assunto'
                type='text'
                name='assunto'
                onChange={(event: any) => setAssunto(event.target.value)}
                placeholder='Qual assunto deseja tratar...'
                value={assunto}
            />

            <TextAreaInput
                placeholder='Digite a sua mensagem...'
                title='Mensagem'
                name='mensagem'
                value={mensagem}
                onChange={(event: any) => setMensagem(event.target.value)}
            />

            <div className="footer-form">
                <ButtonForm />
            </div>
        </form>
    );
}