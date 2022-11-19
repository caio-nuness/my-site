import Layout from "../components/Layout"
import { Card } from "../components/projectsComponents/Card"
import data from '../api/data'

const Projects = () => {
    return (
       <Layout>
            <div className="w-11/12 h-[800px] flex items-center justify-center flex-col">
                <h1 className="font-bold text-xl text-mywhite-full">ULTIMOS PROJETOS</h1>
                <div className="w-full my-2 h-[600px] flex justify-around items-center flex-row">
                    { data.map((item)=>(
                        <Card 
                            key={item.id} 
                            titleCard={item.titleCard} 
                            srcImgCard={item.sourceImgCard}
                            linkDeployCard={item.linkDeployCard} 
                            linkCodeCard={item.linkCodeCard}
                        >
                            { item.descriptionCard }
                        </Card>
                    ))}
                </div>
            </div>
       </Layout>
    )
}

export default Projects