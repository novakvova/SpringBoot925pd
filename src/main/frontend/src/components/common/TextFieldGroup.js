import PropTypes from "prop-types";
import classnames from "classnames";

const TextFieldGroup = ({
    field,
    value,
    label,
    error,
    type,
    onChange,
}) => {
    return (
        <div className="mb-3">
            <label htmlFor={field} className="form-label">{label}</label>
            <input
                onChange={onChange} 
                type={type} 
                id={field}
                name={field} 
                value={value}
                className={classnames("form-control", {"is-invalid": !!error})}
                />
            {!!error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

TextFieldGroup.defaultProps = {
    type: "text"
  };

export default TextFieldGroup;