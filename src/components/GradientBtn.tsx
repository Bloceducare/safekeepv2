const GradientBtn = ({ gradientClass = "safe-gradient-safeguard", from = "#01A0FF", to = "#0123F7", onClick = () => {}, children = "" }) => {
  return (
    <button onClick={onClick} className={`rounded-full  p-[0.09rem] my-1 font-light ${gradientClass}`}>
      <div className=" bg-[white] rounded-full px-3 ">
        <span className={`text-xs text-[#0123F7]  `}>{children}</span>
      </div>
    </button>
  );
};

export default GradientBtn;
