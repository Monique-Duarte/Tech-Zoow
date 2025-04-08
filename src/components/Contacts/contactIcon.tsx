interface ContactIconProps {
  href: string;
  iconClass: string;
  label: string;
}

const ContactIcon: React.FC<ContactIconProps> = ({ href, iconClass, label }) => {
  return (
    <div className="p-2">
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <i className={`${iconClass} icon-contact mx-1 md:text-2xl`}></i>
      </a>
    </div>
  );
};

export default ContactIcon;
