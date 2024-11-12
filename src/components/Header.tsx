import { Menu } from "lucide-react"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
export default function Header() {
    return (
        /* Logo */
        <header className=" max-w-screen-2xl mx-auto">
           <div className="flex justify-between m-14">
            <h1 className="font-extralight text-4xl md:text-5xl">Maryam Anwar</h1>
            {/*Nav Button */}
            <ul className="hidden md:block">
                <li className=" space-x-6 py-4 px-4 text-2xl font-light">
                 <button className=" "><Link href="/">Home</Link></button>
                 <button className="scale-100 hover:scale-110  "><Link href="/about">About</Link></button>
                 <button className="scale-100 hover:scale-110 "><Link href="/experience">Experience</Link></button>
                 <button className="scale-100 hover:scale-110 "><Link href="/contact">Contact</Link></button>
                </li>
            </ul>
            
            <Sheet>
  <SheetTrigger className="md:hidden">
    <Menu/>
    </SheetTrigger>
  
  <SheetContent>
  <ul>
                <li className="flex flex-col items-start space-y-4 mt-6 text-2xl font-light ">
                 <button className="scale-100 hover:scale-110"><Link href="/">Home</Link></button>
                 <button className="scale-100 hover:scale-110"><Link href="/about">About</Link></button>
                 <button className="scale-100 hover:scale-110"><Link href="/experience">Experience</Link></button>
                 <button className="scale-100 hover:scale-110"><Link href="/contact">Contact</Link></button>
                </li>
            </ul>
  </SheetContent>
</Sheet>
</div>

        </header>


    )
}