export default function Title({ text, ...props }) {
  return (
    <div className={props.rotate ? "titleContainer" : "none"}>
      <p className={props.style}>{text}</p>
    </div>
  );
}
