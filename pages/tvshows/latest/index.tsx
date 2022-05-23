import Layout from "@/components/layout/layout";
import Card from "@/components/card/card";
import { getLatestTvShow } from "@/pages/api/tvshows/latest";
import styles from "./index.module.scss";
import Menu from "@/components/menu/menu";
import PropTypes from "prop-types";
import { GetServerSideProps } from "next";
import { Context } from "react";
import Link from "next/link";

const getMovieCard = ({ item, index }) => (
  <Card
    key={index}
    imageSrc={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
    title={item.name}
    year={item.first_air_date}
  />
);

const LatestTvShows = ({ data }) => {
  return (
    <>
      <Menu></Menu>
      {/*<section className={styles["ech-hero"]}></section>*/}
      <h3>Latest TvShows</h3>
      <Link
        href={{
          pathname: "/tvshows/ontheair",
          query: { language: "es-ES" },
        }}
      >
        <a>tv shows on the air</a>
      </Link>
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

LatestTvShows.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// @ts-ignore
export const getServerSideProps: GetServerSideProps<Context<string>> = async (
  context
) => {
  const tvshows = await getLatestTvShow({
    language: "es-ES",
  });
  return {
    props: {
      data: tvshows,
    },
  };
};

LatestTvShows.displayName = "Home";
LatestTvShows.propTypes = {
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

export default LatestTvShows;
