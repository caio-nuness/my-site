import { MyLink } from './MyLink'
import { FaHome, FaToolbox, FaMailBulk, FaUserAlt } from 'react-icons/fa'





export const Navbar = () => {
    return (
        <div className='hidden lg:flex w-5/12 h-full items-center justify-between nav-mobile'>
            <MyLink
                icon={<FaHome size={20} color="whitesmoke" />}
                titleLink='Home'
                hrefLink='/'
            />

            <MyLink
                icon={<FaToolbox size={20} color="whitesmoke" />}
                titleLink='Projetos'
                hrefLink='/projects'
            />

            <MyLink
                icon={<FaMailBulk size={20} color="whitesmoke" />}
                titleLink='Contato'
                hrefLink='/contact'
            />

            <MyLink
                icon={<FaUserAlt size={20} color="whitesmoke" />}
                titleLink='Sobre'
                hrefLink='/about'
            />
        </div>
    )
}