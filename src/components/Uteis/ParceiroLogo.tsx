type ParceiroLogoProps = {
  href: string;
  src: string;
  alt?: string;
  className?: string;
};

const ParceiroLogo = ({ href, src, alt, className }: ParceiroLogoProps) => (
  <a
    className="inline-block mx-2"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className={className || "md:w-[20vw] w-[20vw] my-5"} src={src} alt={alt || "Logo"} />
  </a>
);

export default ParceiroLogo;