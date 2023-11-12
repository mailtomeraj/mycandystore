'use client'
import { useState } from "react"
import BurgerMenu from "./BurgerMenu"
import Drawer from "./Drawer"
import Link from "next/link"
import Image from "next/image"
import {FaRegUser} from "react-icons/fa"
import {BiSearchAlt2,BiHeart} from "react-icons/bi"
import {PiHandbagBold} from "react-icons/pi"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'


const Header = () => {
 const [mobileNav, setMobileNav] = useState(false)
  return (
    <div className="text-white mb-10 xl:mb-24 h-[757px] md:h-[584px] xl:h-[647px] bg-[url('/images/header.png')] bg-no-repeat bg-cover md:bg-bottom bg-center font-poppins w-full">
      <div className="px-3 md:px-7 w-100 mx-auto xl:w-4/6">
        <div className="flex justify-between md:py-7 bg-custom-red">
          <div className="flex justify-center align-middle">
        <BurgerMenu mobileNav={mobileNav} setMobileNav={setMobileNav}/>
        <Drawer mobileNav={mobileNav} setMobileNav={setMobileNav} />
        <div className="hidden md:block justify-center align-middle">
          <div className="flex space-x-4">
            <Link className="font-bold text-xl flex space-x-2" href="">
              <FaRegUser className="font-bold  text-xl"/>
            </Link>
            <span className="font-semibold text-base  space-x-2">Login</span>
            <Link className="font-semibold text-base  space-x-2" href="">Rewards</Link>
          </div>
             
        </div>
        </div>
        <div className="flex justify-center">
           <Image
        src="/images/logo.png"
        width={100}
        height={100}
        alt="logo" />
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center space-x-2 ml-2"><span className="font-semibold">Search</span><BiSearchAlt2 className="font-bold text-2xl"/></div>
              <span className="space-x-4 ml-2"><BiHeart className="font-bold text-2xl"/></span>
            <Link href="/" className="space-x-4 ml-2 relative"> <PiHandbagBold className="font-bold text-2xl"></PiHandbagBold><span className=" inline-flex items-center justify-center z-10 rounded-full w-5 h-5 absolute bg-orange-300 text-purple-900 top-[-10px] -left-[2px] text-center font-bold text-xs">2</span></Link>
           
            </div>
           
        </div>
        <Navbar/>
         <Hero/>
        </div>
       
    </div>
  )
}

export default Header