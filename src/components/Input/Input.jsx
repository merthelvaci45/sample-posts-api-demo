import PropTypes from "prop-types";

import classes from "./Input.module.scss";

const Input = ({ id, onInputChanged, placeholder, type, value }) => {
  const TextComponent = type === "text" ? "input" : "textarea";

  return (
    <label htmlFor={id}>
      <TextComponent
        className={classes.Input}
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        rows={type === "textarea" ? 4 : 1}
        onChange={onInputChanged}
        value={value}
      />
    </label>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  onInputChanged: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: "",
  type: "text",
};

export default Input;
