import Button from '@components/shared/Button';
import clsx from 'clsx';
import { FormEvent } from 'react';
import styles from './NewsSubscribeForm.module.scss';

interface NewsSubscribeFormProps {
  className?: string;
}

function NewsSubscribeForm({ className }: NewsSubscribeFormProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className={clsx(styles.wrapper, className)}
      onSubmit={handleSubmit}
    >
      <h2 className={styles.title}>Sign up for our monthly newsletter</h2>

      <fieldset className={styles.inner}>
        <input
          type="email"
          name="email"
          className={styles.input}
          placeholder="Email*"
          required
        />
        <Button
          className={styles.button}
          type="submit"
        >
          Subscribe
        </Button>
      </fieldset>
    </form>
  );
}

export default NewsSubscribeForm;
