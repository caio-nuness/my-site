import { ModelIconLink } from './ModelIconLink'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

export const BoxSocialsIcon = () => {
    return (
        <div className=' my-10 flex w-4/12 justify-between'>
            <ModelIconLink 
                icon={<FaGithub size={35} color="white"/>}  
                hrefModelLink="https://github.com/caio-nuness"
            />

            <ModelIconLink 
                icon={<FaLinkedin size={35} color="white"/>}  
                hrefModelLink="https://www.linkedin.com/in/caionuness"
            />

            <ModelIconLink 
                icon={<FaInstagram size={35} color="whitesmoke"/>}  
                hrefModelLink="https://instagram.com/caio_ayslan"
            />
        </div>
    )
}