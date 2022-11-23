interface CardProjectProps {
    src?: string;
}

export const ImageCard = ({src}:CardProjectProps) => {
    return (
        <div className="w-full h-[50%]">
            <img src={src} className="rounded-lg w-[100%] h-[100%]" />
        </div>
    );
}