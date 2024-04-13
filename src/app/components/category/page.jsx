import Image from "next/image"

export function Category() {
    return (
        <>
        <div>
            <p className="text-2xl font-bold text-center my-8 tracking-tighter">Our Category</p>
            <section className="flex gap-8 place-content-center pb-16">

                <div className=" relative flex flex-col bg-[#F7FCF8] items-center">
                    <Image src={"/images/modelazo.png"} className="hover:drop-shadow-2xl hover:scale-105 ease-out duration-300" width={300} height={420} alt="modelo"/>
                    <div className="w-[80%] h-[20%] text-white absolute text-center p-[24px] bottom-8 place-items-center bg-[#020016]">
                        <p className="font-bold">Overzised Flannes</p>
                        <button className="text-[12px] hover:text-[14px] ease-out duration-300 hover:underline underline-offset-4"> Shop Now </button>
                    </div>
                </div> 
                        
                <div className=" relative flex flex-col bg-[#FDF8F4] items-center">
                    <Image src={"/images/mandarina.png"} className="hover:drop-shadow-2xl hover:scale-105 ease-out duration-300" width={300} height={420} alt="modelo"/>
                    <div className="w-[80%] h-[20%] text-white absolute text-center p-[24px] bottom-8 place-items-center bg-[#020016]">
                        <p className="font-bold">Distress Bucket Hats</p>
                        <button className="text-[12px] hover:text-[14px] ease-out duration-300 hover:underline underline-offset-4"> Shop Now </button>
                    </div>
                </div>

                <div className=" relative flex flex-col bg-[#FFF6F9] items-center">
                    <Image src={"/images/chico.png"} className="mt-12 hover:drop-shadow-2xl hover:scale-105 ease-out duration-300" width={300} height={420} alt="modelo" />
                    <div className="w-[80%] h-[20%] text-white absolute text-center p-[24px] bottom-8 place-items-center bg-[#020016]">
                        <p className="font-bold">Distress Bucket Hats</p>
                        <button className="text-[12px] hover:text-[14px] ease-out duration-300 hover:underline underline-offset-4"> Shop Now </button>
                    </div>
                </div>
            </section>
        </div>

        <section className="pt-8 flex">

            <div className="w-[30%] flex flex-col items-center">
                <p className="text-[#020016] leading-tight mt-[10%] font-extrabold text-[32px] w-[200px]">Explore Our Products</p>
                <p className="text-[#FF0042] my-2 font-bold">Select the products</p>
                <div className="flex flex-col">
                    <label htmlFor="Oversized Flannels">
                <input className="appearance-none border-2 border-gray-300 bg-white w-5 h-5 checked:border-[#FF0042] rounded-full cursor-pointer" type="radio" name= "group" id="1" /> Oversized Flannels
                    </label>
                    <label htmlFor="Bucket Hats">
                <input className="appearance-none border-2 border-gray-300 bg-white w-5 h-5 checked:border-[#FF0042] rounded-full cursor-pointer" type="radio" name= "group" id="2" /> Bucket Hats
                    </label>
                    <label htmlFor="Trucker Hats">
                <input className="appearance-none border-2 border-gray-300 bg-white w-5 h-5 checked:border-[#FF0042] rounded-full cursor-pointer" type="radio" name= "group" id="3" /> Trucker Hats
                    </label>

                    <button className="bg-[#FF0042] text-white mt-4 w-[220px] h-[54px] rounded-full hover:scale-105 ease-out duration-300">View All Product</button>
                </div>
            </div>

            <div className="w-[70%] h-[480px] flex flex-row items-center justify-center gap-2 ">
                <div className="relative">
                    <div className="w-[180px] h-[320px] bg-[#F9F9FB] right-0 top-[-50px] absolute"></div>
                        <Image className="hover:scale-105 hover:drop-shadow-2xl relative ease-out duration-300 mb-2" src={"/images/buzo.png"} alt="buzo" width={220} height={380} />
                        <p>Flannels Product 1</p>
                        <p className="text-[#D4372E] my-2">$100.000</p>
                    <div>
                    <label htmlFor="red" className="gap-4 flex">
                        <input className="appearance-none bg-[#F53540] w-4 h-4 checked:border-gray-300 checked:scale-125 checked:border-2 rounded-full cursor-pointer" type="radio" name= "red" id="1" />
                        <input className="appearance-none bg-[#7CC576] w-4 h-4 checked:border-gray-300 checked:scale-125 checked:border-2 rounded-full cursor-pointer" type="radio" name= "red" id="2" />
                        <input className="appearance-none bg-[#333333] w-4 h-4 checked:border-gray-300 checked:scale-125 checked:border-2 rounded-full cursor-pointer" type="radio" name= "red" id="3" />
                    </label>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-[180px] h-[320px] bg-[#FBFAFF] right-0 top-[-50px] absolute"></div>
                        <Image className="hover:scale-105 hover:drop-shadow-2xl relative ease-out duration-300 mb-2" src={"/images/buzo.png"} alt="buzo" width={220} height={380} />
                        <p>Flannels Product 1</p>
                        <p className="text-[#D4372E] my-2">$150.000</p>
                    <div>
                    <label htmlFor="green" className="gap-4 flex">
                        <input className="appearance-none bg-[#F53540] w-5 h-5 checked:border-gray-300 checked:scale-125 checked:border-2 rounded-full cursor-pointer" type="radio" name= "green" id="1" />
                        <input className="appearance-none bg-[#7CC576] w-5 h-5 checked:border-gray-300 checked:scale-125 checked:border-2 rounded-full cursor-pointer" type="radio" name= "green" id="2" />
                        <input className="appearance-none bg-[#333333] w-5 h-5 checked:border-gray-300 checked:scale-125 checked:border-2 rounded-full cursor-pointer" type="radio" name= "green" id="3" />
                    </label>
                    </div>
                </div>

                <div className="relative">
                    <div className="w-[180px] h-[320px] bg-[#FFF6F9] right-0 top-[-50px] absolute"></div>
                        <Image className="hover:scale-105 hover:drop-shadow-2xl relative ease-out duration-300 mb-2" src={"/images/buzo.png"} alt="buzo" width={220} height={380} />
                        <p>Flannels Product 1</p>
                        <p className="text-[#D4372E] my-2">$180.000</p>
                    <div>
                    <label htmlFor="black" className="gap-4 flex">
                        <input className="appearance-none bg-[#F53540] w-5 h-5 checked:border-gray-300 checked:scale-125 checked:border-2 rounded-full cursor-pointer" type="radio" name= "black" id="1" />
                        <input className="appearance-none bg-[#7CC576] w-5 h-5 checked:border-gray-300 checked:scale-125 checked:border-2 rounded-full cursor-pointer" type="radio" name= "black" id="2" />
                        <input className="appearance-none bg-[#333333] w-5 h-5 checked:border-gray-300 checked:scale-125 checked:border-2 rounded-full cursor-pointer" type="radio" name= "black" id="3" />
                    </label>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}