function Button({ children, showForm, id, style }) {
  return (
    <button id={id} onClick={showForm} className={style}>
      {children}
    </button>
  );
}

export default Button;
