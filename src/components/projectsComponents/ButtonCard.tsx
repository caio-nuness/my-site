import { BsEye } from 'react-icons/bs'
import { BsBroadcast } from 'react-icons/bs'

interface PropsButtonCard {
    href: string
}

export const ButtonCard: Function = ({ href }:PropsButtonCard) => {
    return (
        <a href={ href } className=" bg-mygrey-150 hover:bg-mygrey-250 duration-500
         flex items-center justify-evenly rounded-lg px-2 w-4/12 h-[90%] shadow-sm">
            <BsBroadcast color='whitesmoke' size={30}/>
        </a>
    ) 
}
