import Navbar from "@/app/components/Navbar/navbar";
import Image from 'next/image';
import Circular_text from '@/app/components/circular_text/circularText'
import Home_model from '../app/components/3D_models/home_model'
import ResumeButton from '../app/components/Buttons/resumeButton'
import FourModels from "./components/3D_models/fourModels";
import VisitSiteButton from "./components/Buttons/visitSiteButton";
import GithubButton from "./components/Buttons/GithubButton";
import TechStackAnimation from "./components/TechStackAnimation/TechStackAnimation";
import ViewMoreButton from "./components/Buttons/ViewMore";
import Footer from "./components/Footer/Footer";
import CreativeDev from './components/Hero page items/CreativeDev'
import SubtitleText from "./components/Hero page items/SubtitleText";
import { ArrowUpRight } from 'lucide-react';

export default function Home() {

  return (
    <div className="w-screen max-w-full flex flex-col">
      <Navbar />

      <main className="flex flex-col pt-16 mt-8 sm:mt-7 sm:pt-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fixed w-full">
            
            {/* creative developer */}
            <CreativeDev/>

            {/* 3D model */}
            <div className="h-60 flex justify-center items-center">
                <Home_model />
            </div>

            {/* subtitle section */}
            <div className="text-black font-normal text-xs sm:text-xl mt-4 sm:mt-10 flex flex-col justify-center items-center">
                {/* <p>
                    Blending design, code, and innovation to craft seamless
                </p>
                <p>digital experiences.</p> */}
                <SubtitleText/>

                <div className="mt-4 sm:mt-2 flex space-x-4 ">
                    <div className="flex items-center gap-2">
                        <span className="relative w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
                        <span className="absolute w-3 h-3 bg-green-500 rounded-full"></span>
                        <p className="text-lg text-gray-700">Available to work</p>
                    </div>
                    <div>
                        <ResumeButton/>
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

          <ViewMoreButton />

        </div>

        {/* Tech stack section */}
        <div className="p-4 mt-20 sm:mt-0 sm:p-12 flex flex-col gap-y-10 sm:gap-y-16">

          {/* teach stack main heading */}
          <div className="flex flex-col gap-y-2 sm:gap-y-4 justify-center items-center">
            <h1 className="text-black text-3xl sm:text-6xl font-bold">My Tach stacks</h1>
            <h2 className="text-sm text-center sm:text-xl text-gray-600">I use a powerful combination of technologies to create seamless, scalable, and efficient web applications. </h2>
          </div>

          {/* Tech stacks */}
          <TechStackAnimation />

        </div>

        {/* My Expertise section */}
        <div className="mb-64">

          {/*  Expertise main heading */}
          <div className="flex flex-col gap-y-2 sm:gap-y-4 justify-center items-center">
            <h1 className="text-black text-3xl sm:text-6xl font-bold">My Expertise</h1>
          </div>

          {/* cards section */}
          <div className="flex sm:flex-row flex-col justify-evenly items-center space-y-12 sm:space-y-0 mt-12 sm:mt-20">

            {/* UI/UX DESIGN card */}
            <div className="relative bg-white rounded-3xl p-10 w-72 h-96 z-50">
              <div className="absolute left-1/3 top-1/2 w-20 h-20 rounded-full z-40 blur-2xl bg-blue-500"></div>
              <span className="text-black text-xl font-medium">01</span>
              <h3 className="text-black font-semibold  text-3xl mt-1">UI/UX DESIGNS</h3>
              <p className="text-black tracking-tighter leading-6 text-2xl mt-8">
                Turning ideas into intuitive designs —
                because great UI is silent, but impactful.
              </p>
              {/* Circular Arrow Icon */}
              <span className="absolute bottom-7 cursor-pointer right-6 bg-black w-10 h-10 flex text-xl items-center justify-center rounded-full text-white ">
                <ArrowUpRight/>
              </span>
            </div>

            {/* frontend DESIGN card */}
            <div className="relative bg-white rounded-3xl p-10 w-72 h-96 z-50">
              <div className="absolute left-1/2 top-1/5 w-20 h-20 rounded-full z-40 blur-2xl bg-red-500"></div>
              <div className="absolute left-1/5 bottom-1/5 w-20 h-20 rounded-full z-40 blur-2xl bg-green-500"></div>
              <span className="text-black text-xl font-medium">02</span>
              <h3 className="text-black font-semibold tracking-tighter leading-8 text-3xl mt-1">FRONTEND DEVELOPMENT</h3>
              <p className="text-black tracking-tighter leading-6 text-2xl mt-8">
                Building pixel-perfect, responsive, and dynamic web experiences — where design meets code.
              </p>
              {/* Circular Arrow Icon */}
              <span className="absolute bottom-7 cursor-pointer right-6 bg-black w-10 h-10 flex text-xl items-center justify-center rounded-full text-white ">
              <ArrowUpRight/>
              </span>
            </div>

            {/* full-stack DESIGN card */}
            <div className="relative bg-white rounded-3xl p-10 w-72 h-96 z-50">
              <div className="absolute left-1/3 top-1/2 w-20 h-20 rounded-full z-40 blur-2xl bg-amber-400"></div>
              <span className="text-black text-xl font-medium">03</span>
              <h3 className="text-black font-semibold tracking-tighter leading-8 text-3xl mt-1">FULL-STACK DEVELOPMENT</h3>
              <p className="text-black tracking-tighter leading-6 text-2xl mt-8">
                Engineering end-to-end solutions — seamless frontend, powerful backend.
              </p>
              {/* Circular Arrow Icon */}
              <span className="absolute bottom-7 cursor-pointer right-6 bg-black w-10 h-10 flex text-xl items-center justify-center rounded-full text-white ">
              <ArrowUpRight/>
              </span>
            </div>

          </div>

        </div>

        {/* Footer section */}
        <Footer/>

      </div>




    </div>
  );
}
