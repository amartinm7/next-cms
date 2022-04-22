import Layout from "../components/layout/layout.js";
import Card from "../components/card/index.js";
import styles from "./index.module.scss";
import Videoplayer from "../components/videoplayer";
import Menu from "../components/menu";
import Sidebar from "../components/layout/sideBar";

const baseClass = styles["ech-movies"];
const heroClass = styles["ech-hero"];

const array = [];
const movie = (index) => <Card key={index} />;

export default function Home() {
  return (
    <section>
      <section className={heroClass}></section>
      <Menu></Menu>
      <section className={"container"}>
        This example adds a property <code>getLayout</code> to your page,
        allowing you to return a React component for the layout. This allows you
        to define the layout on a per-page basis. Since we are returning a
        function, we can have complex nested layouts if desired.
      </section>
      <div className={baseClass}>
        {array.map((item, index) => movie(index))}
      </div>
      )
    </section>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
