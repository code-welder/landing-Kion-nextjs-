import clsx from 'clsx';
import styles from './Logo.module.scss';

import LogoIcon from '@icons/logo.svg';
import KionIcon from '@icons/kion.svg';

interface LogoProps {
  full?: boolean;
}

function Logo({ full = false }: LogoProps) {
  return (
    <span className={clsx(styles.wrapper, !full && styles['wrapper--iconed'])}>
      <LogoIcon className={styles.icon} />

      {full && <KionIcon className={styles.text} />}
    </span>
  );
}

export default Logo;
