import Button from '@components/shared/Button';
import clsx from 'clsx';
import styles from './CallToAction.module.scss';

function CallToAction() {
  return (
    <section className={styles.wrapper}>
      <div className={clsx('container', styles.inner)}>
        <h2 className={clsx('section-title', styles.title)}>
          Start your cloud enablement journey.
        </h2>
        <p className={styles.text}>Request a demo today,</p>

        <Button
          as="a"
          href="#"
          size="lg"
        >
          Request Demo
        </Button>
      </div>
    </section>
  );
}

export default CallToAction;
