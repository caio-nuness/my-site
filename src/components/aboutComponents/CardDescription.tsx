import { ReactNode } from 'react'


interface PropsCardDescription {
    children: ReactNode,
    title?: string
}

export const CardDescription = (props:PropsCardDescription) => {
    return (
        <div className="py-12 mx-4 w-[398px] h-full bg-mygrey-200 flex flex-col items-center justify-between rounded-lg hover:shadow-xl">
            <h2 className="font-bold text-xl text-mywhite-full ">{props.title}</h2>
            {props.children}
        </div>
    )
}