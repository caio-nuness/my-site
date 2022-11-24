import { motion } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'

interface WrapperProps {
    children: React.ReactNode
}

export const Wrapper:Function = ({children}:WrapperProps) => {
    return (
        <motion.div 
        animate={{ x: [0, 100, 0] }}
        className=" w-10/12 max-sm-[414px]:w-full h-screen flex justify-between flex-col wrapper-mobile">
            <Header />
                {children}
            <Footer/>
        </motion.div>
    )
}