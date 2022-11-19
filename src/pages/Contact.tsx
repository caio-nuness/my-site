import Layout from "../components/Layout"
import { Input } from '../components/contactComponents/Input'
import { ButtonForm } from "../components/contactComponents/ButtonForm"

import formimage from '../assets/images/formimage.svg';

export const Contact = () => {
    return (
        <Layout>
            <div className="w-8/12 h-full px-11 flex justify-center items-center">
                <img src={formimage} alt="" />
            </div>
            
            <div className="w-4/12 h-full flex items-center">
                <form className="w-full h-auto rounded-2xl bg-mygrey-150 p-4">
                    <h1 className="text-2xl text-mywhite-full font-bold text-center pt-8">ENTRE EM CONTATO</h1>
                    <Input title="Nome" inputType="text" placeHolder="Informe seu nome completo"/>
                    <Input title="Email" inputType="email" placeHolder="Digite o seu melhor e-mail"/>
                    <Input title="Mensagem" inputType="text" placeHolder="Está disponível para dá início a um projeto?" />
                    <div className="w-full h-20 mt-16 flex justify-center">
                        <ButtonForm/>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Contact