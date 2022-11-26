import avatarImage from '/foto.jpeg'

interface PropsProfile {
    children: string
}

export const Profile = ({ children }: PropsProfile) => {
    return (
        <div className="w-full h-full p-4 box-cardprofile-mobile">
            <div className="w-auto h-2/6 py-4 flex items-center flex-col justify-around">
                <img src={avatarImage} alt="" className='w-[150px] h-[150px] img-mobile rounded-full' />
                <h1 className='text-2xl text-mywhite-800 font-bold'>Caio Nunes</h1>
            </div>
            <div className='w-auto h-4/6 text-justify box-description-profile-mobile'>
                <p className='text-xl description-mobile font-normal text-mywhite-800'>{children}</p>
            </div>
        </div>
    )
}