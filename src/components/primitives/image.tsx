import NextImage from "next/image";

const Image = ({ src = "", width = 0, height = 0, alt = "", className = "", fill = false, size = "100vw" , ...props}) => {
  return (
    <NextImage
      src={src}
      {...(!fill
        ? {
            width,
            height
          }
        : {
            fill,
            size
          })}
      alt={src}
      className={className}
      {...props}
    />
  );
};

export default Image;
