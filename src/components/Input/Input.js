import "./Input.css";

function Input({ title, type, name, id, value, onChange, validationMessage }) {
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
      />
      <span className="input__error-message">{validationMessage}</span>
    </div>
  );
}

export default Input;
