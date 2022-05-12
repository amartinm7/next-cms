import Layout from "../components/layout/layout.js";
import Card from "../components/card/card.js";
import styles from "./index.module.scss";
import Menu from "../components/menu/menu.js";
import { BeanContainerRegistry } from "@/domain/BeanContainerRegistry";
import PropTypes from "prop-types";

const cardInfo = {
  imageSrc: "https://image.tmdb.org/t/p/w500/1HXBUVLacdJhJz0rYGz71qrczMM.jpg",
  title: "Moon knight",
  year: 2022,
};
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const getMovieCard = ({ item, index }) => (
  <Card
    key={index}
    imageSrc={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
    title={item.name}
    year={item.first_air_date}
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

Home.getInitialProps = async () => {
  const beanContainer = new BeanContainerRegistry().getBeanContainer();
  const getTvShowsOnTheAirResponse =
    await beanContainer.getTvShowsOnTheAirUseCase.execute();
  return {
    data: getTvShowsOnTheAirResponse?.data,
  };
};

Home.displayName = "Home";
Home.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.number.isRequired,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        first_air_date: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Home;
