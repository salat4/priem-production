function Title({ text, style , styleAll}) {
  return (
    <div className={styleAll.container__tilte}>
      <span className={style}>{text}</span>
    </div>
  );
}

export default Title;
