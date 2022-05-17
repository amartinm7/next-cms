const key = "x7Krla_UxRg";
const url = `https://www.youtube.com/embed/${key}?autoplay=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`;

const Videoplayer = ({}) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src={url}
        frameBorder="0"
        style={{ width: "480px", height: "370px" }}
        width="480px"
        height="370px"
      />
    </div>
  );
};

Videoplayer.displayName = "Videoplayer";
Videoplayer.propTypes = {
  // background: PropTypes.object,
  // education: PropTypes.object,
  // languages: PropTypes.object,
  // className: PropTypes.string
};
export default Videoplayer;
