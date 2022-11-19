import { MyLink } from './MyLink'
import { FaHome, FaToolbox, FaMailBulk, FaUserAlt} from 'react-icons/fa'

import imgLogo from '../../assets/images/home.png'
import imgJobs from '../../assets/images/bag.png'
import imgContact from '../../assets/images/mail.png'
import imgAbout from '../../assets/images/user.png'



export const Navbar = () => {
    return (
        <div className="w-5/12 h-full flex items-center justify-between">
            <MyLink 
                icon={<FaHome size={20} color="whitesmoke"/>}  
                titleLink='Home'      
                hrefLink='/' 
            />

            <MyLink 
                icon={<FaToolbox size={20} color="whitesmoke"/>}  
                titleLink='Projetos'  
                hrefLink='/projects' 
            />

            <MyLink 
                icon={<FaMailBulk size={20} color="whitesmoke"/>}  
                titleLink='Contato'   
                hrefLink='/contact' 
            />

            <MyLink 
                icon={<FaUserAlt size={20} color="whitesmoke"/>}  
                titleLink='Sobre'     
                hrefLink='/about' 
            />
        </div>
    )
}