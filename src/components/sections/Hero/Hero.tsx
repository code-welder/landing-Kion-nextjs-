import clsx from 'clsx';
import Image from 'next/image';
import styles from './Hero.module.scss';
import Button from '@components/shared/Button';

import MainImage from '@images/hero-section/main.png';
import StatImage1 from '@images/hero-section/stat-1.png';
import StatImage2 from '@images/hero-section/stat-2.png';
import StatImage3 from '@images/hero-section/stat-3.png';

function Hero() {
  return (
    <section className={styles.wrapper}>
      <div className={clsx(styles.inner, 'container')}>
        <div className={styles.text}>
          <h1 className="section-title">
            Complete cloud enablement has arrived.
          </h1>
          <p className={styles.description}>
            Oversee, secure, and scale your cloud with one solution.
            <Button
              className={styles.demo}
              size="lg"
            >
              Request Demo
            </Button>
          </p>
        </div>

        <div className={styles.media}>
          <div className={styles.media__mainImg}>
            <Image
              src={MainImage}
              alt="#"
              priority
              layout="responsive"
            />
          </div>
          <div className={clsx(styles.media__stat, styles.media__stat1)}>
            <Image
              src={StatImage1}
              alt="#"
              layout="responsive"
            />
          </div>

          <div className={clsx(styles.media__stat, styles.media__stat2)}>
            <Image
              src={StatImage2}
              alt="#"
              layout="responsive"
            />
          </div>

          <div className={clsx(styles.media__stat, styles.media__stat3)}>
            <Image
              src={StatImage3}
              alt="#"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
