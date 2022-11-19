interface ModelIconProps {
    icon: JSX.Element,
    hrefModelLink?: string,
}

export const ModelIconLink = ({ icon, hrefModelLink }:ModelIconProps) => {
  return (
    <a href={hrefModelLink}>
      { icon }
    </a>
  );
};
