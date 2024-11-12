import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { MdEmail } from "react-icons/md";
  import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="mt-28 mb-20 px-4 sm:px-8 lg:px-20 max-w-screen-2xl mx-auto">
            <h3  className="font-light text-center text-2xl">Get In Touch</h3>
            <h1 className="font-bold text-center text-5xl animate-pulse">Contact Me</h1>
             <div className="flex justify-center mt-16">
            <Card className= " w-10/12sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 px-10  p-6 border border-gray-600 scale-100 hover:scale-110 shadow-md shadow-black">
  <CardHeader>
    <CardTitle className=" flex items-center gap-2 font-normal text-xl sm:text-2xl mb-4"><MdEmail /><a href="mailto:maryamanwar502@gmail.com" className="hover:underline">maramanwar502@gmail.com</a></CardTitle>
    <CardDescription className=" flex items-center gap-2 font-normal text-black text-xl sm:text-2xl"><FaLinkedin /><a href="https://www.linkedin.com/in/maryam-anwar-16b6b92b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:underline">LinkedIn Profile</a></CardDescription>
  </CardHeader>
  
</Card>
     </div>
        </div>
    );
}