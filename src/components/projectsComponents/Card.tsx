import { ImageCard } from './ImageCard'
import { ButtonCard } from "./ButtonCard";
import { ReactNode } from 'react';

import {FiGithub} from 'react-icons/fi'


interface PropsImage {
    srcImgCard: string,
    titleCard: string,
    children: ReactNode,
    linkDeployCard?: string,
    linkCodeCard: string
}

export const Card = ({ srcImgCard, titleCard, children, linkCodeCard, linkDeployCard }:PropsImage) => {
    return (
        <div className="w-[300px] h-[450px] bg-mygrey-250 hover:bg-mygrey-150
         duration-700 p-4 flex items-center flex-col rounded-lg">

            <ImageCard src={srcImgCard}/>

            <div className="w-full h-[40%] my-3 text-justify text-mywhite-full">
                <h3 className="text-left text-lg mb-2 font-bold 
                bg-gradient-to-tr from-mygreen-full to-myblue-full text-transparent bg-clip-text">
                    { titleCard }
                </h3>
                <span className="font-normal text-mywhite-full">
                    { children }
                </span>
            </div>

            <div className="h-[15%] w-full flex justify-between items-center ">
                <ButtonCard href={linkDeployCard} />
                <a href={linkCodeCard} className="flex h-[90%] w-[50%] items-center justify-center bg-mygrey-200 hover:bg-mygrey-250 duration-500 rounded-xl " >
                    <FiGithub size={25} color="whitesmoke"/>
                </a>
            </div>
        </div>
    )
}
