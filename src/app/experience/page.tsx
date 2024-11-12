import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function Experience() {
    return(
        <div className=" mt-28 max-w-screen-2xl mx-auto">
            <h3 className="font-light text-center text-2xl">Explore My</h3>
            <h1 className="font-bold text-center text-5xl animate-pulse">Experience</h1>
            <section className=" flex flex-col md:flex-row md:gap-10 lg:gap-20 mx-4 sm:mx-12 lg:mx-20" >
              {/* Professional button and cards */}
              <div className="flex flex-col items-center mt-14">
            <button className="text-white font-bold text-3xl text-center shadow-lg shadow-black bg-black w-52 h-16 rounded-full mt-14 mx-32 p-3">Professional</button>
            <div className="flex flex-col items-center gap-6">
            <Card className=" w-64 sm:w-72 h-64 sm:h-72 mt-14 border border-gray-600 scale-100 hover:scale-110 rounded-full shadow-lg shadow-black animate-pulse">
  <CardHeader>
    <CardTitle className="text-center mt-11 text-3xl">Lab Technician <br /> Diploma</CardTitle>
    <CardDescription className="text-center mt-8 text-2xl">2022 To 2023</CardDescription>
  </CardHeader>
  
</Card>

<Card className="w-56 sm:w-64  h-56 sm:h-64 mx-32 -mt-20 bg-black text-white border border-gray-600 scale-100 hover:scale-110 rounded-full animate-pulse shadow-lg shadow-black ">
  <CardHeader>
    <CardTitle className="text-center mt-11 text-3xl">Front-end<br /> Developer</CardTitle>
    <CardDescription className="text-center mt-8 text-2xl">2023 To 2024</CardDescription>
  </CardHeader>
  
</Card>
</div>
</div>
    {/*Extracurricular Button And Cards*/}
          <div className="flex flex-col items-center mt-14">
            
             <button className="text-black font-bold text-3xl text-center shadow-lg shadow-black bg-white border border-black w-60 h-16 rounded-full mt-14  p-3">Extracurricular</button>
            <div className="flex flex-col items-center gap-6">
             <Card className="w-64 sm:w-72 h-64 sm:h-72 mt-14 -mx-28 bg-black text-white border border-gray-600 scale-100 hover:scale-110 rounded-full animate-pulse shadow-lg shadow-black">
  <CardHeader>
    <CardTitle className="text-center mt-11 text-3xl">E-commerce <br /> Shopify</CardTitle>
    <CardDescription className="text-center mt-8 text-2xl">2024</CardDescription>
  </CardHeader>
</Card>

<Card className="w-56 sm:w-64 h-56 sm:h-64 -mt-20  border border-gray-600 scale-100 hover:scale-110 rounded-full animate-pulse shadow-lg shadow-black">
  <CardHeader>
    <CardTitle className="text-center mt-11 text-3xl">Tutor</CardTitle>
    <CardDescription className="text-center mt-8 text-2xl">2022 To 2024</CardDescription>
  </CardHeader>
  
</Card>
</div>
</div>
            
            </section>


        </div>

    );
}