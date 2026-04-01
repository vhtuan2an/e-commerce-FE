import { Circles } from "react-loader-spinner";

const Loader = ({ text }) => {
  return (
    <div className="flex justify-center items-center w-full h-112.5">
      <div className="flex flex-col items-center gap-4">
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <p className="text-slate-800">
          {text ? text : "Loading..."}
        </p>
      </div>
    </div>
  );
};

export default Loader;
