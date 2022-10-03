import Head from 'next/head';
import { NextPage } from 'next';
import Header from '@components/Header';
import SectionHero from '@components/SectionHero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kion</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="We deliver more than just the features to manage and govern your cloud"
        />
      </Head>
      <Header />

      <main>
        <SectionHero />
      </main>
    </>
  );
};

export default Home;
