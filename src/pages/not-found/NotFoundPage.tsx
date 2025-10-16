import Bao1 from "@/assets/vectors/Bao1_404.svg";
import Bao2 from "@/assets/vectors/Bao2_404.svg";

export const NotFoundPage = () => {
  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center">
      <div className="flex flex-col items-center p-4 w-full max-w-7xl lg:flex-row lg:items-stretch lg:justify-between">
        <div className="flex flex-col items-center justify-center my-8 lg:my-0 lg:order-2 lg:flex-1">
          <h1 className="text-9xl lg:text-[15rem] font-extrabold text-primary [text-shadow:4px_4px_6px_rgba(0,0,0,0.25)]">
            404
          </h1>
          <div className="text-center font-bold text-lg sm:text-lg lg:text-2xl my-5">
            Oops! It looks like this page wandered off to find snacks, our cute
            little buns are looking for it too!
          </div>
          <span className="mt-6 inline-block text-center border p-2 bg-yellow-400 rounded-lg">
            button
          </span>
        </div>
        <div className="flex space-x-8 order-2 my-8 lg:order-none lg:contents">
          <div className="flex-1 lg:order-1 lg:block lg:flex-1">
            <img src={Bao1} className="w-full h-full object-contain" />
          </div>
          <div className="flex-1 lg:order-3 lg:flex-1">
            <img src={Bao2} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};
