import PropTypes from "prop-types";
import { useId } from "react";
function Input({
  type = "text",
  placeholder = "",
  error,
  label,
  value,
  onChange,
  id,
  name,
}) {
  const _id = useId();
  const localId = id || _id;

  return (
    <div>
      {label && (
        <label htmlFor={localId} className="mb-3 block">
          {label}
        </label>
      )}

      <input
        id={localId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-secondary-200 rounded-xl px-4 py-3 w-full border ${
          error ? "border-red-500" : "border-transparent"
        }`}
      />

      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </div>
  );
}

Input.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.node,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
