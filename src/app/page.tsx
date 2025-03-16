import Navbar from "@/app/components/Navbar/navbar";
import Home_model from "@/app/components/3D_models/home_model";
import Circular_text from '@/app/components/circular_text/circularText'
import ResumeButton from "./components/Buttons/resumeButton";

export default function Home() {

  return (
    <div className="w-screen max-w-full flex flex-col">
      <Navbar />

      <main className="flex flex-col pt-16 mt-8 sm:mt-5 sm:pt-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fixed w-full">
        {/* creative developer */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black text-4xl md:text-8xl sm:text-9xl font-semibold">CREATIVE</h1>
          <h1 className="text-black text-4xl md:text-8xl sm:text-9xl font-semibold">DEVELOPER</h1>
        </div>

        {/* 3D model */}
        <div className="h-60 flex justify-center items-center">
          <Home_model />
        </div>

        {/* subtitle section */}
        <div className="text-black font-normal text-xs sm:text-xl mt-4 sm:mt-10 flex flex-col justify-center items-center">
          <p>
            Blending design, code, and innovation to craft seamless
          </p>
          <p>digital experiences.</p>

          <div className="mt-4 sm:mt-2 flex space-x-4 ">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-lg text-gray-700">Available to work</p>
            </div>
            <div>
              <ResumeButton />
            </div>
          </div>

        </div>
      </main>

      {/* circular text */}
      <div className="ml-8 sm:ml-28 mt-8 fixed bottom-10 z-40 hidden sm:block">
        <Circular_text />
      </div>

      <div className="h-dvh w-screen bottom-4">

      </div>

      <div className="h-200 z-50 bg-gray-100">

      </div>


    </div>
  );
}
