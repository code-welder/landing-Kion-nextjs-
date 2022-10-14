import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import Header from '@components/Header';
import Hero from '@components/sections/Hero';
import Partners from '@components/sections/Partners';
import Product from '@components/sections/Product';
import Results from '@components/sections/Results';
import About from '@components/sections/About';
import BuildFor from '@components/sections/BuildFor';
import CallToAction from '@components/sections/CallToAction';
import Footer from '@components/Footer';

const HOUR_IN_SECONDS = 60 * 60;

interface PageProps {
  year: number;
}

const Home: NextPage<PageProps> = ({ year }) => {
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

      <main id="main">
        <Hero />
        <Partners />
        <Product />
        <Results />
        <About />
        <BuildFor />
        <CallToAction />
      </main>

      <Footer year={year} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const date = new Date();
  const year = date.getFullYear();

  return {
    props: {
      year,
    },
    revalidate: HOUR_IN_SECONDS,
  };
};

export default Home;
