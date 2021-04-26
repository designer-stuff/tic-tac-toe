import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import "./style/button.css";

function Button({ text, onGameStart }) {
  return (
    <div className="btn" onClick={onGameStart}>
      {text}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onGameStart: PropTypes.func,
};

export default Button;
