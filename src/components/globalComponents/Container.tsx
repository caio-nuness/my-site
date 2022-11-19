interface ContainerProps {
    children: React.ReactNode;
}

export const Container = ( props:ContainerProps ) => {
    return (
        <div className="w-[80vw] rounded-lg h-scree bg-mygrey-150 flex items-center justify-center">
            { props.children } 
        </div>
    )
}