import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { PiUserGearBold } from "react-icons/pi";
  import { IoPeople } from "react-icons/io5";
  import { CgWebsite } from "react-icons/cg";
  import { BsDatabaseFillAdd } from "react-icons/bs";
  import { SiWebdriverio } from "react-icons/si";
  import { AiFillDropboxCircle } from "react-icons/ai";
export default function About() {
    return (
        <div className="mt-28 max-w-screen-2xl mx-auto">
            <h3 className="text-2xl font-light flex justify-center mb-2">Get To Know More</h3>
            <h1 className="text-5xl font-bold flex justify-center mb-3  animate-pulse">About Me</h1>
            
            
            <p className="text-2xl  font-light flex justify-center text-center animate-fade-in mx-4 sm:mx-12 my-16 lg:mx-32"> I&apos;s m Maryam Anwar is an aspiring front-end developer with a strong
            foundation in modern web <br /> technologies.My skilled in HTML
             CSS, and JavaScript, which form the core of her web development <br /> expertis.
              I&apos;S m proficient in building dynamic, responsive websites using cutting-edge 
              frameworks  <br />like Next.jsand React.js. With a passion for creating user-friendly
               aesthetically pleasing interfaces, <br />I'm constantly learning and evolving
               in the ever-changing world of front-end development. <br />I dedication to coding,
                combined with her creativity and attention to detail,
             makes me <br /> a valuable asset to any project or team. </p>
            

             <section className="mt-14 mx-4 sm:mx-12 lg:mx-64 flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-20">
             <Card className="w-full sm:w-1/2 lg:w-96 h-48 border border-gray-600 transform scale-100 hover:scale-105 skew-x-6 skew-y-3  shadow-md shadow-black">
  <CardHeader className="items-center text-2xl"><PiUserGearBold />
    <CardTitle className="flex justify-center text-3xl">Experience</CardTitle>
    <CardDescription className="text-center font-light text-2xl">Html,CSS,Next.js,react.js <br />Front-End Developer</CardDescription>
  </CardHeader>
</Card>

<Card className="w-full sm:w-1/2 lg:w-96 h-48 border border-gray-600 transform scale-100 hover:scale-105 skew-x-6 skew-y-3   shadow-md shadow-black">
  <CardHeader className="items-center text-2xl"><IoPeople />
    <CardTitle className="flex justify-center text-3xl">Education</CardTitle>
    <CardDescription className=" text-center font-light text-2xl">Intermediate <br /> Diploma In Lab Tech</CardDescription>
  </CardHeader>
</Card>
</section>

<section className="mt-10 sm:mt-10 lg:mt-20 mx-40 sm:mx-12 lg: mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
<Card className=" w-72 md:w-60 h-44 border border-gray-600 transform scale-100 hover:scale-110 skew-x-6 skew-y-3   shadow-md shadow-black">
  <CardHeader className="items-center text-2xl"><CgWebsite />
    <CardTitle className="text-center text-2xl">Web <br />Developement</CardTitle>
  </CardHeader>
</Card>

<Card className="w-72 md:w-60 h-44 border border-gray-600 transform scale-100 hover:scale-110 skew-x-6 skew-y-3   shadow-md shadow-black">
  <CardHeader className="items-center text-2xl"><BsDatabaseFillAdd />
    <CardTitle className="text-center text-2xl">Database and <br /> Visualization</CardTitle>
  </CardHeader>
</Card>

<Card className="w-72 md:w-60 h-44 border border-gray-600 transform scale-100 hover:scale-110 skew-x-6 skew-y-3  shadow-md shadow-black">
  <CardHeader className="items-center text-2xl"><SiWebdriverio />
    <CardTitle className="text-center text-2xl">User interface <br /> and Experience <br /> Design</CardTitle>
  </CardHeader>
</Card>

<Card className="w-72 md:w-60 h-44 border border-gray-600 transform skew-x-6 skew-y-3 scale-100 hover:scale-110 shadow-md shadow-black">
  <CardHeader className="items-center text-2xl"><AiFillDropboxCircle />
    <CardTitle className="text-center text-2xl">AI and Machine <br /> Learning</CardTitle>
  </CardHeader>
</Card>

</section>
 
</div>

        
        
    )
}