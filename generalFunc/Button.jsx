function Button({ text, showForm, id }) {
  return (
    <button id={id} onClick={showForm} className="buttonForm">
      {text}
    </button>
  );
}

export default Button;
