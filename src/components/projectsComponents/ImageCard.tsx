interface CardProjectProps {
    src?: string;
}

export const ImageCard = ({src}:CardProjectProps) => {
    return (
        <div className="w-full h-[40%]">
            <img src={src}   alt='' className="rounded-lg w-[100%] h-[100%]" />
        </div>
    );
}