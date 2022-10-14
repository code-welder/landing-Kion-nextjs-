import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.scss';

import Modal from '@components/shared/Modal';
import PlayIcon from '@icons/play.svg';
import PlaceholderImage from '@images/placeholder.jpg';

const differencesList = [
  'Cloud-native access',
  'A private, self-hosted architecture',
  'Multi-cloud control',
  'A single, intuitive interface',
];

function About() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="about"
      className={styles.wrapper}
    >
      <div className={clsx(styles.inner, 'container')}>
        <div className={styles.text}>
          <h2 className="section-title section-title--bold">
            The Kion
            <br />
            Difference
          </h2>
          <p className={styles.description}>
            We deliver more than just the features to manage and govern your
            cloud. Kion gives you a comprehensive solution for your cloud to
            enable your organization to achieve more.
          </p>
          <span className={styles.label}>our differences</span>
          <ul className={styles.list}>
            {differencesList.map((text, i) => (
              <li
                key={i}
                className={styles.list__item}
              >
                {text}
              </li>
            ))}
          </ul>
          <Link
            href="#"
            passHref
          >
            <a className="learn-more learn-more--h-green">Learn More</a>
          </Link>
        </div>

        <button
          className={styles.videoControls}
          aria-controls="kion-about"
          onClick={() => setShowModal(true)}
        >
          <PlayIcon className={styles.playIcon} />
          <Image
            src={PlaceholderImage}
            alt="#"
            placeholder="blur"
          />
          <span></span>
        </button>
      </div>

      <Modal
        id="kion-about"
        open={showModal}
        onClose={() => setShowModal(false)}
        className={styles.modal}
      >
        <iframe
          className={styles.video}
          src={showModal ? 'https://www.youtube.com/embed/dQw4w9WgXcQ' : ''}
          title="About Kion"
          frameBorder="0"
        ></iframe>
      </Modal>
    </section>
  );
}

export default About;
