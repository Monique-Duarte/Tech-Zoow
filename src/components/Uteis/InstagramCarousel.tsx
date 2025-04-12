import React from "react";

type InstagramPostProps = {
  url: string;
};

const InstagramPost: React.FC<InstagramPostProps> = ({ url }) => {
  return (
    <div className="keen-slider__slide">
      <iframe
        src={`${url}embed`}
        width="100%"
        height="500"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default InstagramPost;