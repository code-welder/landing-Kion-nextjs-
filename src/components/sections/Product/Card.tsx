import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './Product.module.scss';

export interface CardProps {
  img: StaticImageData;
  title: string;
  description: string;
  link: string;
}

function Card({ img, title, description, link }: CardProps) {
  return (
    <li className={styles.card}>
      <Link
        href={link}
        passHref
      >
        <a className={styles.card__link}>
          <div className={styles.card__imgWrapper}>
            <Image
              src={img}
              alt="#"
              layout="responsive"
            />
          </div>

          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__description}>{description}</p>
          <div className={clsx(styles.card__learnMore, 'learn-more')}>
            Learn More
          </div>
        </a>
      </Link>
    </li>
  );
}

export default Card;
