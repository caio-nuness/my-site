import { MainTitle } from './MainTitle'
import { BoxButtonContact } from './BoxButtonContact'
import { BoxSocialsIcon } from './BoxSocialsIcon'

export const LeftMain = () => {
    return (
        <div className="w-6/12 py-20">
            <MainTitle/>
            <BoxButtonContact/>
            <BoxSocialsIcon/>
        </div>
    )
}