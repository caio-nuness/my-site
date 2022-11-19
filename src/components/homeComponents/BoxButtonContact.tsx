import imgWhats from '../../assets/images/whatsapp.png'
import { FaWhatsapp } from 'react-icons/fa'

export const BoxButtonContact = () => {
    return(
        <div className='w-8/12 h-16 flex items-center py-20'>

            <a className='w-7/12 h-16 text-mywhite-full bg-mygrey-200 px-6 rounded-lg hover:bg-mygrey-150
             flex justify-evenly items-center duration-500' href='https://contate.me/caio-ayslan-nunes'>
                <FaWhatsapp size={30} color="whitesmoke"/>
                Entrar em contato
            </a>

            <a className='px-5 text-myblue-full font-bold hover:text-myblue-800' href='/curriculum.png' download="CAIO_NUNES_CV_DEVELOPER">
                Baixar curriculum
            </a>
        </div>
    )
}