import { BsEye } from 'react-icons/bs'

interface PropsButtonCard {
    href: string
}

export const ButtonCard: Function = ({ href }:PropsButtonCard) => {
    return (
        <a href={ href } className="mr-4 bg-mygreen-200 hover:bg-mygreen-400 duration-700
         font-bold text-mywhite-full flex items-center justify-evenly rounded-lg px-2 w-4/12 h-[90%] shadow-sm">
            <BsEye color='whitesmoke' size={22}/>
            Online
        </a>
    ) 
}