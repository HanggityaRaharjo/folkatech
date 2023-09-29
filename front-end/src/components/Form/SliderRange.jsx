import ReactSlider from "react-slider";

const SliderRange = ({ HandleChangePrice }) => {
  return (
    <>
      <ReactSlider
        className="horizontal-slider -mt-4"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[0, 100]}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => {
          `Thumb value ${state.valueNow}`;
        }}
        renderThumb={(props) => (
          <div
            {...props}
            className="w-[14px] h-[14px] border-0 bg-primary rounded-full translate-y-4 cursor-pointer"
          ></div>
        )}
        pearling
        minDistance={5}
        onChange={(value, index) => {
          HandleChangePrice(value);
        }}
      />
    </>
  );
};

export default SliderRange;
