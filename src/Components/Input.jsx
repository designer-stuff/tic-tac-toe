import PropTypes from "prop-types";
import "./style/input.css";

function Input({ weapon }) {
  return (
    <div className="form-group">
      <input type="text" placeholder="Enter Name" />
      <p className="weapon">
        Weapon: <strong>{weapon}</strong>
      </p>
    </div>
  );
}

Input.propTypes = {
  weapon: PropTypes.string,
};

export default Input;
