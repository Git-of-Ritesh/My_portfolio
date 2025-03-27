import Navbar from "@/app/components/Navbar/navbar";
import Image from 'next/image';
import Home_model from "@/app/components/3D_models/home_model";
import Circular_text from '@/app/components/circular_text/circularText'
import ResumeButton from "./components/Buttons/resumeButton";
import FourModels from "./components/3D_models/fourModels";
import VisitSiteButton from "./components/Buttons/visitSiteButton";
import GithubButton from "./components/Buttons/GithubButton";
import TechStackAnimation from "./components/TechStackAnimation/TechStackAnimation";
import ViewMoreButton from "./components/Buttons/ViewMore";

export default function Home() {

  return (
    <div className="w-screen max-w-full flex flex-col">
      <Navbar />

      <main className="flex flex-col pt-16 mt-8 sm:mt-7 sm:pt-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fixed w-full">
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

      {/* imaginary div to prevent overlapping */}
      <div className="h-dvh full bottom-4">
      </div>

      <div className="z-50 w-full flex-col justify-center items-center bg-gray-100 space-y-2 sm:space-y-20">

        <div className="sm:hidden px-7 py-40 space-y-4">
          <h2 className="text-base font-medium text-black">I’m Ritesh — a software developer and UI/UX designer. I build user-friendly apps by blending clean code with creative design.</h2>
          <h2 className="text-base font-medium text-black ">Specializing in full-stack development, I turn ideas into smooth, high-performing digital products.</h2>
          <h2 className="text-base font-medium text-black">Passionate about technology and creativity, I constantly explore new tools and design trends to craft better apps.</h2>
          <h2 className="text-base font-medium text-black">Based in India, I’m open to work and collaborations from 10 AM to 8 PM (IST).</h2>
        </div>

        <div className="hidden relative w-full sm:flex justify-center items-center">
          {/* 3D Model Component */}
          <FourModels />

          {/* Transparent Glassmorphic Card Overlay */}
          <div className="absolute top-[55%] -translate-y-1/2 w-80 sm:w-200 p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg border space-y-5 border-white/20">
            <h2 className="text-xl font-medium text-black">I’m Ritesh — a software developer and UI/UX designer. I build user-friendly apps by blending clean code with creative design.</h2>
            <h2 className="text-xl font-medium text-black ">Specializing in full-stack development, I turn ideas into smooth, high-performing digital products.</h2>
            <h2 className="text-xl font-medium text-black">Passionate about technology and creativity, I constantly explore new tools and design trends to craft better apps.</h2>
            <h2 className="text-xl font-medium text-black">Based in India, I’m open to work and collaborations from 10 AM to 8 PM (IST).</h2>
          </div>

          <div className="absolute bottom-0 right-0 bg-gray-100 w-40 h-20"></div>
        </div>

        {/* selected work section */}
        <div className="p-4 sm:p-12 flex flex-col justify-center items-center  gap-y-16">

          <div className="flex flex-col gap-y-2 sm:gap-y-4 justify-center items-center">
            <h1 className="text-black text-3xl sm:text-6xl font-bold">Projects I&apos;ve done</h1>
            <h2 className="text-sm text-center sm:text-xl text-gray-600">I build Web Applications that bring positive results to businesses. Check out a few of my projects. </h2>
          </div>

          {/* project cards */}
          <div className="sm:py-12 py-6 sm:mx-20 flex flex-col bg-zinc-300 rounded-xl">

            {/* project discription */}
            <div className="w-full flex justify-between px-8 sm:px-24">
              <div className="flex flex-col sm:flex-row gap-x-3">
                <div>
                  <Image
                    className="sm:rounded-2xl rounded-xl sm:w-[60px] w-[50px]"
                    src="/logo4.png"
                    alt="Project1 logo"
                    width={60}
                    height={60}
                    unoptimized
                  />
                </div>

                <div>
                  <h1 className="text-black text-2xl sm:text-3xl font-semibold">Notify app</h1>
                  <h2 className="text-black text-sm sm:text-base leading-snug font-normal">About the Notify app and discription about the application</h2>
                </div>
              </div>

              <div className="hidden sm:flex justify-center items-center gap-2">
                <VisitSiteButton />
                <GithubButton />
              </div>
            </div>

            {/* project image */}
            <div className="-mb-5 sm:-mb-10">
              <Image
                className="rounded-3xl"
                src="/Project1.png"
                alt="Icon image"
                width={1500}
                height={400}
                unoptimized
              />
            </div>
          </div>

          {/* project card 2 */}
          <div className="sm:py-12 py-6 sm:mx-20 flex flex-col bg-green-100 rounded-xl">

            {/* project discription */}
            <div className="w-full flex justify-between px-8 sm:px-24">
              <div className="flex flex-col sm:flex-row gap-x-3">
                <div>
                  <Image
                    className="sm:rounded-2xl rounded-xl sm:w-[60px] w-[50px]"
                    src="/logo5.png"
                    alt="Project1 logo"
                    width={60}
                    height={60}
                    unoptimized
                  />
                </div>

                <div>
                  <h1 className="text-black text-2xl sm:text-3xl font-semibold">Recipe Finder</h1>
                  <h2 className="text-black text-sm sm:text-base leading-snug font-normal">About the Notify app and discription about the application</h2>
                </div>
              </div>

              <div className="hidden sm:flex justify-center items-center gap-2">
                <VisitSiteButton />
                <GithubButton />
              </div>
            </div>

            {/* project image */}
            <div className="-mb-9 px-5 sm:px-18 sm:-mb-22 -mt-4 sm:-mt-14">
              <Image
                className="rounded-3xl"
                src="/Project2.png"//use a snapshot size of 124 in shots app
                alt="Icon image"
                width={1100}
                height={100}
                unoptimized
              />
            </div>
          </div>

          <ViewMoreButton/>

        </div>

        {/* Tech stack section */}
        <div className="p-4 sm:p-12 flex flex-col gap-y-16">

          {/* teach stack main heading */}
          <div className="flex flex-col gap-y-2 sm:gap-y-4 justify-center items-center">
            <h1 className="text-black text-3xl sm:text-6xl font-bold">My Tach stacks</h1>
            <h2 className="text-sm text-center sm:text-xl text-gray-600">I use a powerful combination of technologies to create seamless, scalable, and efficient web applications. </h2>
          </div>

          {/* Tech stacks */}
          <TechStackAnimation/>

        </div>

      </div>


    </div>
  );
}
