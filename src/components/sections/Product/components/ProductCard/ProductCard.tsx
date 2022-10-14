import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.scss';

export interface CardProps {
  img: StaticImageData;
  title: string;
  description: string;
  link: string;
}

function ProductCard({ img, title, description, link }: CardProps) {
  return (
    <li>
      <Link
        href={link}
        passHref
      >
        <a className={styles.link}>
          <div className={styles.img}>
            <Image
              src={img}
              alt="#"
              layout="responsive"
            />
          </div>

          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={clsx(styles.learnMore, 'learn-more')}>Learn More</div>
        </a>
      </Link>
    </li>
  );
}

export default ProductCard;
