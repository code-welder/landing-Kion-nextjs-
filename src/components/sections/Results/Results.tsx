import styles from './Results.module.scss';

const resultsList = [
  {
    title: '10x',
    description: 'Faster cloud account setup and provisioning',
  },
  {
    title: '30%',
    description: 'Savings, on average, in cloud bills',
  },
  {
    title: '4,000+',
    description: 'One-click resources to automate compliance and security',
  },
];

function Results() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h2 className="section-title section-title--bold">Our Results</h2>
        <ul className={styles.list}>
          {resultsList.map((result, i) => (
            <li
              key={i}
              className={styles.stat}
            >
              <h3 className={styles.stat__title}>{result.title}</h3>
              <p className={styles.stat__description}>{result.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Results;
