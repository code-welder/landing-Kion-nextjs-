import clsx from 'clsx';
import { NavigationLink } from '.';
import styles from './Navigation.module.scss';

interface NavigationProps {
  links: NavigationLink[];
  id?: string;
  wrapperClass?: string;
  listClass?: string;
  onLinkClick?: React.MouseEventHandler<HTMLElement>;
}

function Navigation({
  links,
  id,
  wrapperClass,
  listClass,
  onLinkClick,
  ...rest
}: NavigationProps) {
  return (
    <nav
      id={id}
      className={wrapperClass}
      {...rest}
    >
      <ul className={clsx(styles.list, listClass)}>
        {links.map((link) => (
          <li
            className={styles.list__item}
            key={link.title}
            onClick={onLinkClick}
          >
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
