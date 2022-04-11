function Title({ title }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{ borderTop: "3px solid grey", flexGrow: 1, margin: "0 10px" }}
      ></div>
      <h3 className="font-bold text-5xl font-edwardianKT text-primary-color">
        {title}
      </h3>
      <div
        style={{ borderTop: "3px solid grey", flexGrow: 1, margin: "0 10px" }}
      ></div>
    </div>
  );
}

export default Title;
