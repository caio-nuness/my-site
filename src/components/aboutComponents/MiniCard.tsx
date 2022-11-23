import { ReactNode } from "react"

interface PropsMiniCard {
    title: string,
    children: ReactNode
}

export const MiniCard = ({title, children}:PropsMiniCard) => {
    return (
        <div className="rounded-2xl mb-4 w-[257px] h-[113px] bg-mygrey-150 hover:bg-mygrey-250 cursor-pointer duration-500 flex flex-col items-center justify-between pb-8">
            <h2 className="leading-8 bg-gradient-to-r from-blue-400 to-green-300 bg-clip-content font-bold w-full text-black bg-mygrey-200 text-center">{title}</h2>
            <span className="font-bold text-mywhite-full">{children}</span>
        </div>
    )
}