interface PropsInputForm {
    onChange: any,
    name: string,
    type: string,
    placeholder: string
    title: string
    value: string
}

export const InputForm = ({ onChange,name,type,placeholder, title, value }:PropsInputForm) => {
    return (
        <div className="mt-6">
            <label className="font-bold text-mywhite-full  ">{title}:</label>
            <input
                className="w-full h-14 rounded-lg bg-mygrey-150 outline-none text-mywhite-full p-4 placeholder-slate-200"
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}