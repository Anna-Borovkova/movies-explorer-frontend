import "./Input.css";

function Input({ title, type, name, id }) {
  return (
    <div className="input">
      <p className="input__title">{title}</p>
      <input
        className="input__field"
        required
        type={type}
        name={name}
        id={id}
      />
    </div>
  );
}

export default Input;
