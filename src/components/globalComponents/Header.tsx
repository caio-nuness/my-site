
import logo from  '../../assets/images/logo.png'

import { Navbar } from './Navbar'

export const Header = () => {
    

    return (
        <header className=" header-mobile h-20 w-full flex items-center justify-between">
            <img src={logo} alt="Logo" width="132" height="100" className='logo-mobile'/>
            <Navbar/>
        </header>
    )
}