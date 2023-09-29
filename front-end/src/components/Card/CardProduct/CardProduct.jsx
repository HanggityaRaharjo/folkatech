const CardProduct = ({ children }) => {
  return (
    <div className="flex justify-center ">
      <div className="shadow-[0px_4px_4px_0px_#00000021] min-h-[450px] border w-full rounded p-[18px] flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default CardProduct;
