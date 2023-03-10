function Title({ text, style, styleForContainer }) {
  return (
    <div className={styleForContainer.container__title}>
      <span className={style}>{text}</span>
    </div>
  );
}

export default Title;
