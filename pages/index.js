import Layout from "../components/layout/layout.js";
import Card from "../components/card/index.js";
import styles from "./index.module.scss";
import Videoplayer from "../components/videoplayer";

const baseClass = styles["ech-movies"];
const array = ["one", "two", "three", "four", "five", "six"];
const movie = (index) => <Card key={index} />;

export default function Home() {
  return (
    <section>
      <h2>Movies</h2>
      <p>
        This example adds a property <code>getLayout</code> to your page,
        allowing you to return a React component for the layout. This allows you
        to define the layout on a per-page basis. Since we are returning a
        function, we can have complex nested layouts if desired.
      </p>
      <div className="modal modal-large modal-animated--zoom-out" id="in-modal">
        <a
          href="#searchModalDialog"
          className="modal-overlay close-btn"
          aria-label="Close"
        ></a>
        <div className="modal-content" role="document">
          <div className="modal-header">
            <a href="#components" className="u-pull-right" aria-label="Close">
              <span className="icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="times"
                  className="svg-inline--fa fa-times fa-w-11 fa-wrapper"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 352 512"
                >
                  <path
                    fill="currentColor"
                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
          <div
            className="modal-body"
            style={{ width: "550px", height: "400px" }}
          >
            <Videoplayer />
          </div>
        </div>
      </div>
      <a href="#in-modal">Open Modal</a>
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
