export default function Backdrop({ toggleShowMenu }) {
  return <div onClick={toggleShowMenu} id={"close"} className="backdrop"></div>;
}
