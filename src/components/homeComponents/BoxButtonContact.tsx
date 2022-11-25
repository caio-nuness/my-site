import imgWhats from '../../assets/images/whatsapp.png'
import { FaWhatsapp } from 'react-icons/fa'

export const BoxButtonContact = () => {
    return(
        <div className='w-8/12 h-16 flex items-center py-20 box-whats'>
            <a className='contact-me' href='https://contate.me/caio-ayslan-nunes'>
                <FaWhatsapp size={35} color="whitesmoke"/>
                Entrar em Contato
            </a>
            <a className='px-5 text-myblue-full font-bold hover:text-myblue-800' href='/curriculum.png' download="CAIO_NUNES_CV_DEVELOPER">
                Baixar curriculum
            </a>
        </div>
    )
}