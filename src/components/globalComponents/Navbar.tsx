import { MyLink } from './MyLink'
import { PageNavigator } from './PageNavidator'
import { FaHome, FaToolbox, FaMailBulk, FaUserAlt } from 'react-icons/fa'





export const Navbar = () => {
    return (
        <PageNavigator className='hidden lg:flex w-5/12 h-full items-center justify-between nav-mobile' />
    )
}