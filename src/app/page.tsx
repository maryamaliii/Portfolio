import Image from "next/image";
import About from "./about/page";
import Experience from "./experience/page";
import Contact from "./contact/page";

export default function Home() {
  return(
    <main className="max-w-screen-2xl mx-auto">
      <section className="flex flex-row md:flex-row justify-center gap_12 md:gap-48 mt-20 md:mt-40 mx-6 md:mx-12">
        <div className="text-center md:text-left mt-8 md:mt-14">
        <h3 className="font-light text-xl md:text-2xl mb-2 sm:mx-6 md:mx-32 overflow-hidden whitespace-nowrap border-r-2 border-black animate-typewriter">Hello I&apos;s m</h3>
          <h1 className="text-4xl md:text-5xl font-bold animate-pulse">Maryam Anwar</h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mt-4 sm:mx-2 md:mx-10 overflow-hidden whitespace-nowrap border-r-2 border-black animate-typewriter">Front-end Developer  </h2>
        
        </div>

        <div>
        <Image src="/pfp.jpg" alt="Logo" width={200} height={200} className="rounded-full scale-100 hover:scale-110 shadow-lg shadow-black mx-12 md:w-96 md:h-96"/>
        </div>
      </section>
     <div className="mt-20 md:mt-36">
        <About/>
        <Experience/>
        <Contact/>
      </div>
      </main>
    
      )
}