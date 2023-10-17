import "./Input.css";

function Input({ title, type, name, id, value, onChange, pattern, error }) {
  return (
    <div className="input">
      <p className="input__title">{title}</p>
      <input
        className="input__field"
        required
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        pattern={pattern}
      />
      <span className="input__error-message">{error}</span>
    </div>
  );
}

export default Input;
