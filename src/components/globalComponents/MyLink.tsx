import { Link } from 'react-router-dom'

interface MyLinkProps {
    hrefLink: string,
    titleLink: string,
    icon: JSX.Element,
}

export const MyLink = ({ hrefLink, titleLink, icon }: MyLinkProps) => {
    return (
        <Link to={hrefLink} className='w-[7rem] mylink-mobile h-14 text-mywhite-full bg-mygrey-150 px-2 rounded-lg flex justify-evenly items-center hover:bg-mygrey-200 duration-500'>
                {icon} {titleLink}
        </Link>
      
    )
}