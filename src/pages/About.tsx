import Layout from "../components/Layout"
import { MiniCard } from '../components/aboutComponents/MiniCard'
import { CardDescription } from '../components/aboutComponents/CardDescription'
import { Profile } from "../components/aboutComponents/Profile"

const About = () => {
    return (
        <Layout>
            <div className="w-full h-full flex about-mobile">
                <CardDescription title="HABILIDADES">
                    <MiniCard title="LINGUAGEM">JAVASCRIPT</MiniCard>
                    <MiniCard title="BANCO DE DADOS">MONGODB - POSTGRESQL</MiniCard>
                    <MiniCard title="FRAMEWORK">NEXTJS - EXPRESS</MiniCard>
                    <MiniCard title="OUTROS">NODEJS - GIT - GITHUB </MiniCard>
                </CardDescription>

                <CardDescription title="">
                    <Profile>
                        Me chamo Caio Nunes, tenho 23 anos e sou de Juazeiro/Ba.
                        Me considero um jovem sonhador, que busca através da tecnologia,
                        conhecimento pessoal e profissinal.
                        O meu primeiro contato com a programação, se deu no ano de 2014
                        quando conheci o HTML, o que me despertou a curiosidade sobre
                        como as páginas web funcionavam por baixo dos panos,
                        dai, navegando pelo youtube me deparei com o curso de Python do "Gustavo Guanabara",
                        e como muitos outros, virei um "pequeno garfanhoto".
                    </Profile>
                </CardDescription>

                <CardDescription title="AINDA MAIS ...">
                    <MiniCard title="DEPLOY">AWS - VERCEL</MiniCard>
                    <MiniCard title="ORM">PRISMA</MiniCard>
                    <MiniCard title="SISTEMA OPERACIONAL">WINDOWS - LINUX</MiniCard>
                    <MiniCard title="IDE">VISUAL STUDIO CODE </MiniCard>
                </CardDescription>
            </div>
        </Layout>
    )
}

export default About