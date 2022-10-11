import Button from '@components/Button';
import Logo from '@components/Logo';
import NewsSubscribeForm from '@components/NewsSubscribeForm';
import Socials from '@components/Socials';
import Link from 'next/link';
import styles from './Footer.module.scss';

interface FooterProps {
  year: string | number;
}

const productsLinks = [
  {
    title: 'Product Overview',
    href: '#',
  },
  {
    title: 'Automation & Orchestration',
    href: '#',
  },
  {
    title: 'Financial Management',
    href: '#',
  },
  {
    title: 'Continuous Compliance',
    href: '#',
  },
  {
    title: 'Integrations',
    href: '#',
  },
  {
    title: 'Request a Demo',
    href: '#',
  },
  {
    title: 'Try Kion For Free',
    href: '#',
  },
];

const resourcesLinks = [
  {
    title: 'All Resources',
    href: '#',
  },
  {
    title: 'Blog',
    href: '#',
  },
  {
    title: 'Case Studies',
    href: '#',
  },
];

const supportLinks = [
  {
    title: 'Support Overview',
    href: '#',
  },
  {
    title: 'FAQs',
    href: '#',
  },
];

const aboutLinks = [
  {
    title: 'About Us',
    href: '#',
  },
  {
    title: 'Careers',
    href: '#',
  },
  {
    title: 'Contact',
    href: '#',
  },
];

const sideLinks = [
  {
    title: 'Resources',
    links: resourcesLinks,
  },
  {
    title: 'Support',
    links: supportLinks,
  },
  {
    title: 'About',
    links: aboutLinks,
  },
];

const copyrightsLinks = [
  {
    title: 'License Agreement',
    href: '#',
  },
  {
    title: 'Privacy Policy',
    href: '#',
  },
];

function Footer({ year }: FooterProps) {
  return (
    <footer className={styles.wrapper}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.top__left}>
            <p className={styles.title}>Our Product</p>
            <ul className={styles.products}>
              {productsLinks.map((productsLink, i) => (
                <li
                  key={i}
                  className={styles.products__item}
                >
                  <a
                    href={productsLink.href}
                    className={styles.link}
                  >
                    {productsLink.title}
                  </a>
                </li>
              ))}
            </ul>
            <Button size="lg">Get a Demo</Button>
          </div>

          <div className={styles.top__right}>
            <div className={styles.sideLinks}>
              {sideLinks.map(({ title, links }, i) => (
                <div key={i}>
                  <p className={styles.title}>{title}</p>
                  <ul className={styles.sideLinks__list}>
                    {links.map((link, i) => (
                      <li key={i}>
                        <a
                          href={link.href}
                          className={styles.link}
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Link
              href="/"
              passHref
            >
              <a className={styles.logo}>
                <Logo />
              </a>
            </Link>

            <NewsSubscribeForm className={styles.form} />
          </div>
        </div>

        <div className={styles.bottom}>
          <Socials className={styles.socials} />

          <div className={styles.copyrightsLinks}>
            {copyrightsLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={styles.link}
              >
                {link.title}
              </a>
            ))}
          </div>

          <p>Copyright &copy; {year} Nor Labs, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
