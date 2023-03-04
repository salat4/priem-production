function Backdrop({ children, ...arqs }) {
  return (
    <div
      onClick={arqs.toggleShowBackdrop}
      data-close="close"
      className="backdrop"
    >
      {children}
    </div>
  );
}

export default Backdrop;
