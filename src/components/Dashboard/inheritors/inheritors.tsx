import SingleInheritors from './single-inheritor';

const AllInheritors = () => {
  return (
    <div className="w-full mt-16 flex gap-2">
      <div className="w-full lg:max-w-[50%]">
        <SingleInheritors />
      </div>
      {/* <div className="w-full lg:max-w-[50%]">
        <SingleInheritors />
    </div> */}
    </div>
  );
};

export default AllInheritors;
