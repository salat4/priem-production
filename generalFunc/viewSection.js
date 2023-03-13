export default function isSectionOutOfView({ homeSection, setShowButtonUp }) {
  const rect = homeSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  if (rect.bottom > 0 && rect.top < windowHeight) {
    setShowButtonUp(false);
  } else {
    setShowButtonUp(true);
  }
}
