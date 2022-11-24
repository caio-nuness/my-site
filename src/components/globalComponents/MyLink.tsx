import { Link } from 'react-router-dom'
import { IconBurger } from './IconBurger'

interface MyLinkProps {
    hrefLink: string,
    titleLink: string,
    icon: JSX.Element,
}

export const MyLink = ({ hrefLink, titleLink, icon }: MyLinkProps) => {
    return (
        <div>
            <Link to={hrefLink} className='w-[125px] h-14 text-mywhite-full bg-mygrey-150 px-3 rounded-lg flex justify-evenly items-center hover:bg-mygrey-200 duration-500'>
                {icon} {titleLink}
            </Link>
        </div>
    )
}