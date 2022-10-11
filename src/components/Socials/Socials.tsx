import styles from './Socials.module.scss';

import TwitterIcon from '@icons/twitter.svg';
import FacebookIcon from '@icons/facebook.svg';
import LinkedinIcon from '@icons/linkedin.svg';
import InstagramIcon from '@icons/instagram.svg';
import clsx from 'clsx';

interface SocialsProps {
  className?: string;
}

const socialsList = [
  {
    icon: TwitterIcon,
    title: 'Twitter',
    href: '#',
  },
  {
    icon: FacebookIcon,
    title: 'Facebook',
    href: '#',
  },
  {
    icon: LinkedinIcon,
    title: 'LinkedIn',
    href: '#',
  },
  {
    icon: InstagramIcon,
    title: 'Instagram',
    href: '#',
  },
];

function Socials({ className }: SocialsProps) {
  return (
    <ul className={clsx(styles.wrapper, className)}>
      {socialsList.map((social, i) => (
        <li key={i}>
          <a
            className={styles.link}
            href={social.href}
            title={`Follow Kion on ${social.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {<social.icon />}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Socials;
