export default function Text({ onFocus, value, icon }) {
  return (
    <>
      {icon && icon()}
      <input value={value} onChange={(e) => onFocus(e.target.value)} />
    </>
  );
}
