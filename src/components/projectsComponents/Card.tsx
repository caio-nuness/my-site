import { ImageCard } from './ImageCard'
import { ButtonCard } from "./ButtonCard";
import { ReactNode } from 'react';

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
         duration-700 p-2 flex items-center flex-col rounded-lg">

            <ImageCard src={srcImgCard}/>

            <div className="w-full h-[40%] my-3 text-justify text-mywhite-full">
                <h3 className="text-left text-lg mb-2 font-bold 
                bg-gradient-to-r from-myblue-full to-myblue-800 text-transparent bg-clip-text">
                    { titleCard }
                </h3>
                <span className="font-normal text-mywhite-full">
                    { children }
                </span>
            </div>

            <div className="h-[10%] w-full flex justify-between items-center">
                <ButtonCard href={linkDeployCard} />
                <a href={linkCodeCard} className="text-myblue-full hover:text-myblue-800 duration-500 font-normal mr-2" >
                    Verificar código
                </a>
            </div>
        </div>
    )
}