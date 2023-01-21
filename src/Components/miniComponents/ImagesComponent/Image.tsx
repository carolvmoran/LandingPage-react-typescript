import React from "react";

interface propsImage {
  src: string;
  alt: string;
}

const Image = (props: propsImage) => {
  const { src, alt } = props;
  return (
    <figure>
      <img src={src} alt={alt} />
    </figure>
  );
};

export { Image };
