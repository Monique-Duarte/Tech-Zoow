type PlanilhaLinkProps = {
  title: string;
  href: string;
};

const PlanilhaLink = ({ title, href }: PlanilhaLinkProps) => (
  <a
    className="inline-block md:text-lg py-1"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>{title}</h2>
  </a>
);

export default PlanilhaLink;