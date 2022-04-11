function Title({ title }) {
  return (
    <div className="flex items-center my-8">
      <div className="border-solid border-primary-color border-t-2 flex-grow my-0 mx-3"></div>
      <h3 className="font-bold text-5xl font-edwardianKT text-primary-color">
        {title}
      </h3>
      <div className="border-solid border-primary-color border-t-2 flex-grow my-0 mx-3"></div>
    </div>
  );
}

export default Title;
