export function Checkbox({ children, name, id, value, setValue, onClick }) {
  return (
    <label
      className="checkbox-container"
      htmlFor={id}
      onClick={() => onClick(id)}
    >
      <input
        className="checkbox"
        type="checkbox"
        name={name}
        id={id}
        checked={value ? "checked" : ""}
        onChange={(e) => setValue(e.target.checked)}
      />
      <span className="checkmark"></span>
      {children}
    </label>
  );
}
