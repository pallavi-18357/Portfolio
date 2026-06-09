import { mySocials, contactInfo } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-forest/40 to-transparent h-[1px] w-full" />
      <div className="flex flex-col gap-1">
        <p>{contactInfo.phone}</p>
        <p>{contactInfo.email}</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2025 Pallavi Patil. All rights reserved.</p>
    </section>
  );
};

export default Footer;
