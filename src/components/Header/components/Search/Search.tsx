import styles from './Search.module.scss';
import { useRef } from 'react';
import SearchButton from '@components/Header/components/SearchButton';

interface SearchProps {
  onSubmit?: React.FormEventHandler;
}

function Search({ onSubmit }: SearchProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    onSubmit && onSubmit(e);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label className={styles.search}>
        <input
          type="search"
          name="search"
          className={styles.search__input}
          ref={inputRef}
          placeholder="Search..."
        />
      </label>

      <SearchButton
        aria-label="search"
        type="submit"
      />
    </form>
  );
}

export default Search;
