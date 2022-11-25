import {FiSend} from 'react-icons/fi'


export const ButtonForm = () => {
    return(
        <button type="submit"

            className="w-2/4 h-3/4 bg-mygreen-400 rounded-lg button-form-mobile 
             text-mywhite-full text-base font-bold hover:bg-mygreen-200 duration-700 shadow-sm flex items-center justify-evenly px-9"
        >
            ENVIAR 
            <FiSend size={22} color="white"/>
        </button>
    )
}