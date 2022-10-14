import styles from './SearchButton.module.scss';
import SearchIcon from '@icons/search.svg';
import clsx from 'clsx';

function SearchButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props;
  return (
    <button
      className={clsx(className, styles.wrapper)}
      {...rest}
    >
      <SearchIcon className={styles.icon} />
    </button>
  );
}

export default SearchButton;
