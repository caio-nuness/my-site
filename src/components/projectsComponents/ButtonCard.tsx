import { BsEye } from 'react-icons/bs'

interface PropsButtonCard {
    href: string
}

export const ButtonCard: Function = ({ href }:PropsButtonCard) => {
    return (
        <a href={ href } className="bg-mygreen-200 hover:bg-mygreen-400 duration-700
         font-bold text-mywhite-full flex items-center justify-center rounded-lg  w-3/12 h-[100%] shadow-sm">
            <BsEye color='whitesmoke' size={25}/>
        </a>
    ) 
}