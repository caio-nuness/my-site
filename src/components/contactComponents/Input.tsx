interface PropsInput {
    title: string,
    inputType: string,
    placeHolder: string,
    id?: string,
    name?: string,
}

export const Input = ({title, inputType, placeHolder, id, name}:PropsInput) => {
    return(
        <div className="mt-8">
            <label className="  font-bold text-mywhite-full  ">{title}:</label>
            <input 
                className="w-full h-14 rounded-lg bg-mygrey-150 outline-none text-mywhite-full p-4 placeholder-slate-200"
                type={inputType} 
                name={name}
                id={id} 
                placeholder={placeHolder}
            />
        </div>
    )
}