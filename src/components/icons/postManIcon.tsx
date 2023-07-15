import React from "react";
import postman from "../../assets/postman.png";

export const PostManIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      version='1.1'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      style={{
        padding: "2px",
      }}
      {...props}
    >
      <image xlinkHref={postman.src} width='100%' height='100%' />
    </svg>
  );
};
