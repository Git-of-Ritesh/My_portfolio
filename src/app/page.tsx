import Navbar from "@/app/components/Navbar/navbar";
import Home_model from "@/app/components/3D_models/home_model";
import Circular_text from '@/app/components/circular_text/circularText'

export default function Home() {

  return (
    <div className="w-screen max-w-full flex flex-col">
      <Navbar />

      <main className="flex flex-col pt-16 sm:pt-0">
        {/* creative developer */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black text-4xl md:text-8xl sm:text-9xl font-normal">CREATIVE</h1>
          <h1 className="text-black text-4xl md:text-8xl sm:text-9xl font-normal">DEVELOPER</h1>
        </div>

        {/* 3D model */}
        <div className="h-50 flex justify-center items-center">
          <Home_model />
        </div>

        {/* subtitle section */}
        <div className="text-black font-normal text-xs sm:text-xl mt-4 sm:mt-10 flex flex-col justify-center items-center">
          <p>
            Blending design, code, and innovation to craft seamless
          </p>
          <p>digital experiences.</p>
        </div>
      </main>

      {/* circular text */}
      <div className="ml-8 sm:ml-28 mt-8">
        <Circular_text/>
      </div>
    </div>
  );
}
