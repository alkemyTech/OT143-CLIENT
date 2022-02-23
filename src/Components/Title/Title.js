import defaultImage from "../../images/default-image.png";
import "./Title.scss";

const Title = ({ text, image }) => {
  return (
    <div className="title-container" style={{ backgroundImage: `url(${image ? image : defaultImage})` }}>
      <h3 className="title">{text}</h3>
    </div>
  );
};

export default Title;
