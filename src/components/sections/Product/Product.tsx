import Button from '@components/shared/Button';
import clsx from 'clsx';
import styles from './Product.module.scss';

import AutomationImage from '@images/products/ao.png';
import Card, { CardProps } from './components/ProductCard/ProductCard';

const productsList: CardProps[] = [
  {
    img: AutomationImage,
    title: 'Automation & Orchestration',
    description:
      'Provision accounts, get enterprise-wide visibility, and fully integrate the cloud with your tech stack to automate the full cloud lifecycle.',
    link: '#',
  },
];

function Product() {
  return (
    <section
      id="product"
      className={styles.wrapper}
    >
      <div className={clsx(styles.inner, 'container')}>
        <div className={styles.text}>
          <h2 className="section-title">The Product</h2>
          <p className={styles.description}>
            Kion offers the only single platform approach to{' '}
            <a
              href="#"
              className={styles.description__link}
            >
              cloud enablement
            </a>
            , transcending cloud management and cloud governance by offering all
            three pillars necessary for total cloud control.
          </p>
          <Button>More About the Product</Button>
        </div>
        <ul className={styles.list}>
          {productsList.map((product, i) => (
            <Card
              key={i}
              {...product}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Product;
