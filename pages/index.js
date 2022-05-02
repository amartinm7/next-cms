import Layout from "../components/layout/layout.js";
import Card from "../components/card/card.js";
import styles from "./index.module.scss";
import Menu from "../components/menu/menu.js";

const cardInfo = {
  imageSrc: "https://image.tmdb.org/t/p/w500/1HXBUVLacdJhJz0rYGz71qrczMM.jpg",
  title: "Moon knight",
  year: 2022,
};
const array = [1, 2, 3, 4, 5];
const movie = (index) => (
  <Card
    key={index}
    imageSrc={cardInfo.imageSrc}
    title={cardInfo.title}
    year={cardInfo.year}
  />
);

export default function Home() {
  return (
    <>
      <Menu></Menu>
      {/*<section className={styles["ech-hero"]}></section>*/}
      <section className={styles["ech-container"]}>
        This example adds a property <code>getLayout</code> to your page,
        allowing you to return a React component for the layout. This allows you
        to define the layout on a per-page basis. Since we are returning a
        function, we can have complex nested layouts if desired.
      </section>
      <section className={styles["ech-movies"]}>
        {array.map((item, index) => movie(index))}
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
