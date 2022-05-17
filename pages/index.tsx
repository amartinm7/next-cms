import Layout from "@/components/layout/layout";
import Card from "../components/card/card";
import styles from "./index.module.scss";
import Menu from "../components/menu/menu";
import { BeanContainerRegistry } from "@/domain/BeanContainerRegistry";
import PropTypes from "prop-types";
import { GetServerSideProps } from "next";
import { Context } from "react";

const getMovieCard = ({ item, index }) => (
  <Card
    key={index}
    imageSrc={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
    title={item.title}
    year={item.release_date}
  />
);

const Home = ({ data }) => {
  return (
    <>
      <Menu></Menu>
      {/*<section className={styles["ech-hero"]}></section>*/}
      <h3>Hey Hey hey</h3>
      <section className={styles["ech-container"]}>
        This example adds a property <code>getLayout</code> to your page,
        allowing you to return a React component for the layout.
      </section>
      <section className={styles["ech-movies"]}>
        {data?.results?.map((item, index) => getMovieCard({ item, index }))}
      </section>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// @ts-ignore
export const getServerSideProps: GetServerSideProps<Context<string>> = async (
  context
) => {
  const beanContainer = new BeanContainerRegistry().getBeanContainer();
  const getTrendingUseCaseResponse = await beanContainer[
    "getTrendingUseCase"
  ].execute();
  return {
    props: {
      data: getTrendingUseCaseResponse?.data,
    },
  };
};

Home.displayName = "Home";
Home.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.number.isRequired,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Home;
