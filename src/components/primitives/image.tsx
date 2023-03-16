import NextImage from "next/image";

const Image = ({ src = "", width = 0, height = 0, alt = "", className = "", fill = false, size = "100vw" }) => {
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
    />
  );
};

export default Image;
