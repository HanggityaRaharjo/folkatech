const Breadcrumbs = ({ children, className }) => {
  return (
    <div
      className={`h-10 flex items-center px-[70px] gap-[18px] text-[#696969] ${className}`}
    >
      {children}
    </div>
  );
};

export default Breadcrumbs;
