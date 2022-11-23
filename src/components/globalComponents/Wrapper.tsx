
import { Header } from './Header'
import { Footer } from './Footer'

interface WrapperProps {
    children: React.ReactNode
}

export const Wrapper:Function = ({children}:WrapperProps) => {
    return (
        <div className=" w-10/12 max-sm-[414px]:w-full h-screen flex justify-between flex-col">
            <Header />
                {children}
            <Footer/>
        </div>
    )
}