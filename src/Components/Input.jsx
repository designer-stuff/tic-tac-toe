import PropTypes from "prop-types";
import "./style/input.css";

function Input({ name, value, weapon, onPlayerNameChange }) {
  return (
    <div className="form-group">
      <input
        type="text"
        placeholder="Enter Name"
        name={name}
        value={value}
        onChange={(event) => onPlayerNameChange(event)}
        autoComplete="off"
        autoCapitalize="words"
        required
      />
      <p className="weapon">
        Weapon: <strong>{weapon}</strong>
      </p>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  weapon: PropTypes.string,
  onPlayerNameChange: PropTypes.func,
};

export default Input;
