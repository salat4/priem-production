function toggleBackdrop(e) {
  const { close } = e.target.dataset;
  if (e.key === "Escape" || close === "close") {
    return false;
  }
}

export default toggleBackdrop;
