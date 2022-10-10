import styles from './BuildFor.module.scss';

import Azure from '@images/build-for/azure.png';
import Aws from '@images/build-for/aws.png';
import GoogleCloud from '@images/build-for/google-cloud.png';
import Image from 'next/image';

const clientsList = [
  {
    src: Azure,
    alt: 'Azure',
  },
  {
    src: Aws,
    alt: 'Amazon Web Services',
  },
  {
    src: GoogleCloud,
    alt: 'Google Cloud',
  },
];

function BuildFor() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h2 className="section-title">Built For</h2>
        <ul className={styles.list}>
          {clientsList.map((clientLogo, i) => (
            <li key={i}>
              <Image
                src={clientLogo.src}
                alt={clientLogo.alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BuildFor;
