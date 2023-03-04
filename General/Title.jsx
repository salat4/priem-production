function Title({ text, ...props }) {
  return (
    <div className={props.rotate ? "titleContainer" : "titleContainerRow"}>
      <span className={props.style}>{text}</span>
    </div>
  );
}

export default Title;
