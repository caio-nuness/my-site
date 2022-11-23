interface PropsTextArea {
    placeholder: string,
    name: string,
    title: string,
    onChange?: any,
    value: string
}

export const TextAreaInput = ({placeholder, name, title, onChange, value}: PropsTextArea) => {
    return (
        <div className="mt-6">
            <label className="  font-bold text-mywhite-full  ">{title}: </label>
            <textarea 
                className="w-full rounded-lg bg-mygrey-150 outline-none text-mywhite-full p-4 placeholder-slate-200" 
                placeholder={placeholder} 
                onChange={onChange} 
                name={name} 
                cols={30} 
                rows={5}
                value={value}
            />
        </div>
    )
}