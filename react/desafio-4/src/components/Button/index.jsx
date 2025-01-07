export function Button({children, styles, colorBorder, func }) {
  return (
    <button
      onClick={func}
      className={styles}
      style={{ border: colorBorder }}
    >
      {children}
    </button>
  );
}
