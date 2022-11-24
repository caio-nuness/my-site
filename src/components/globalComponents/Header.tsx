
import logo from  '../../assets/images/logo.png'

import { Navbar } from './Navbar'
import {IconBurger} from './IconBurger'

export const Header = () => {
    

    return (
        <header className=" header-mobile h-20 w-full flex items-center justify-between">
            <img src={logo} alt="Logo" width="132" height="100" className='logo-mobile'/>
            <Navbar/>

            <button
                className=' header-mobile lg:hidden'
                onClick={() => { console.log('Clicou no burger') }}
            >
                <IconBurger width={35} height={35} />
            </button>
        </header>
    )
}