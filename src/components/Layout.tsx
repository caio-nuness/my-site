import { Wrapper } from './globalComponents/Wrapper'
import { Container } from './globalComponents/Container'

interface LayoutProps {
    children: React.ReactNode, 
}

export default function Layout({ children }: LayoutProps) {
   return(
    <Container>
        <Wrapper>
            <main className='h-[780px] flex items-center justify-center'>
                { children }
            </main>         
        </Wrapper>
    </Container>
   )
}
