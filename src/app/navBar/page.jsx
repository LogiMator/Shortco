import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { PiShoppingCartSimple } from "react-icons/pi";

export default function NavBar() {
    return (
        <nav className="flex w-full h-20 justify-end items-center pr-24">
            <div className="flex gap-4">
                <a href="#" className=" hover:text-[#F00101] hover:underline hover:underline-offset-4 ease-out duration-300">Home</a>
                <a href="#" className="hover:text-[#F00101] hover:underline hover:underline-offset-4 ease-out duration-300">About</a>
                <a href="#" className="hover:text-[#F00101] hover:underline hover:underline-offset-4 ease-out duration-300">Shop</a>
                <a href="#" className=" hover:text-[#F00101] hover:underline hover:underline-offset-4 ease-out duration-300">Contact Us</a>
                
                <a href="" className=" hover:text-[#F00101] ">
                <IoIosSearch size={24}/>
                </a>
                <a href="" className=" hover:text-[#F00101] ">
                <GoPerson size={24}/>
                </a>
                <a href="" className=" hover:text-[#F00101] ">
                <PiShoppingCartSimple size={24}/>
                </a>
            </div>
        </nav>
    )
}