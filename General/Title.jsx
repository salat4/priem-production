export default function Title({ text, ...props }) {
  return <p className={props.style}>{text}</p>;
}
