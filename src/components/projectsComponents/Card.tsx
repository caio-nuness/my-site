import { ImageCard } from './ImageCard'
import { ButtonCard } from "./ButtonCard";
import React, { Children } from 'react';

interface PropsImage {
    srcImgCard: string,
    titleCard: string,
    children: React.ReactNode,
    linkDeployCard?: string,
    linkCodeCard: string
}

export const Card = ({ srcImgCard, titleCard, children, linkCodeCard, linkDeployCard }:PropsImage) => {
    return (
        <div className="w-[300px] h-[450px] bg-mygrey-200 hover:bg-mygrey-150
         duration-500 p-4 flex items-center flex-col rounded-lg">

            <ImageCard src={srcImgCard}/>

            <div className="w-full h-[50%] my-5 text-justify text-mywhite-full ">
                <h3 className="text-left text-lg mb-2 font-bold 
                bg-gradient-to-r from-myblue-full to-myblue-800 text-transparent bg-clip-text">
                    { titleCard }
                </h3>
                <span className="font-normal text-mywhite-full">
                    { children }
                </span>
            </div>

            <div className="h-[15%] w-full flex justify-between items-center">
                <ButtonCard href={linkDeployCard} />
                <a href={linkCodeCard} className="text-myblue-full mr-24 hover:text-myblue-800 duration-500" >Ver código</a>
            </div>
        </div>
    )
}