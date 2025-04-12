type PlanilhaLinkProps = {
  title: string;
  href: string;
};

const PlanilhaLink = ({ title, href }: PlanilhaLinkProps) => (
  <a
    className="inline px-7 md:text-lg py-1 cursor-pointer hover:underline"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {title}
  </a>
);

export default PlanilhaLink;