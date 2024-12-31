import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
  EMAIL: 3,
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder }) => {
  let component;
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <>
          <label htmlFor={label}>{label}</label>
          <input
            type="text"
            name={name}
            placeholder={placeholder}
            id={label}
            data-testid="field-testid"
            required
          />
        </>
      );
      break;
    case FIELD_TYPES.EMAIL:
      component = (
        <>
          <label htmlFor={label}>{label}</label>
          <input
            type="email"
            name={name}
            placeholder={placeholder}
            id={label}
            data-testid="field-testid"
            required
          />
        </>
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      component = (
        <>
          <label htmlFor={label}>{label}</label>
          <textarea
            name={name}
            id={label}
            data-testid="field-testid"
            required
          />
        </>
      );
      break;
    default:
      component = (
        <>
          <label htmlFor={label}>{label}</label>
          <input
            type="text"
            name={name}
            placeholder={placeholder}
            id={label}
            data-testid="field-testid"
            required
          />
        </>
      );
  }
  return <div className="inputField">{component}</div>;
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
Field.defaultProps = {
  label: "",
  placeholder: "",
  type: FIELD_TYPES.INPUT_TEXT,
  name: "field-name",
};

export default Field;
