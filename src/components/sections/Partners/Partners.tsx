import Image from 'next/image';
import styles from './Partners.module.scss';

import Nasa from '@images/partners/nasa.png';
import Absolute from '@images/partners/absolute.png';
import Cdc from '@images/partners/cdc.png';
import Indeed from '@images/partners/indeed.png';
import Verizon from '@images/partners/verizon.png';

const partnersList = [
  {
    src: Nasa,
    alt: 'Nasa',
  },
  {
    src: Absolute,
    alt: 'Absolute Software',
  },
  {
    src: Cdc,
    alt: 'Centers for Disease Control & Prevention',
  },
  {
    src: Indeed,
    alt: 'Indeed',
  },
  {
    src: Verizon,
    alt: 'Verizon',
  },
];

function Partners() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <ul className={styles.list}>
          {partnersList.map((partnerLogo, i) => (
            <li
              key={i}
              className={styles.item}
            >
              <Image
                src={partnerLogo.src}
                alt={partnerLogo.alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Partners;
