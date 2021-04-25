import PropTypes from "prop-types";
import "./style/button.css";

function Button({ text }) {
  return (
    <div className="btn">
      <a href="#">{text}</a>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
